from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import action
from .models import CustomUser, Grade, Student, Subject, Topic, Question, Quiz, Answer, StudentQuizResult, StudentAnswer
from .serializers import CustomUserSerializer, StudentSerializer, GradeSerializer, SubjectSerializer, TopicSerializer, QuestionSerializer, QuizSerializer, AnswerSerializer, StudentQuizResultSerializer 
from rest_framework import viewsets

# Register user
@api_view(['POST'])
def register_user(request):
    serializer = CustomUserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save(user_type='student')
        student_serializer = StudentSerializer(data={"user": user.id})
        if student_serializer.is_valid():
            student_serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            user.delete()
            return Response(student_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Login
@api_view(['POST'])
def login(request):
    data = request.data
    password = data.get('password', None)
    email = data.get('email', None)
    if not email:
        return Response({"message": "Email required!"}, status=status.HTTP_400_BAD_REQUEST)
    if not password:
        return Response({"message": "Password required!"}, status=status.HTTP_400_BAD_REQUEST)
    try:
        user = CustomUser.objects.get(email=email)

        if not user.check_password(password):
            return Response({"message": "Wrong password!"}, status=status.HTTP_400_BAD_REQUEST)

        serializer = CustomUserSerializer(user)

        # Generate JWT token
        refresh = RefreshToken.for_user(user)
        token = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

        res_data = {
            'user': serializer.data,
            'token': token
        }
        return Response(res_data, status=status.HTTP_200_OK)

    except CustomUser.DoesNotExist:
        return Response({"message": "User with the email not found!"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_users(request):
    users = CustomUser.objects.all()
    serializer = CustomUserSerializer(users, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

#viewsets for CRUD operations
class StudentViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]

class GradeViewSet(viewsets.ModelViewSet):
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['get'], url_path='subjects/(?P<grade_no>[^/.]+)')
    def get_subjects(self, request, grade_no=None):
        # Get the grade object
        try:
            grade = Grade.objects.get(grade_no=grade_no)
        except Grade.DoesNotExist:
            return Response({'error': 'Grade not found'}, status=404)

        # Get all subjects for this grade
        # Assuming there is a reverse relation `subject_set`
        subjects = grade.subject_set.all()

        # Serialize the subjects
        serializer = SubjectSerializer(subjects, many=True)
        return Response(serializer.data)

class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['get'], url_path='topics/(?P<subject_id>[^/.]+)')
    def get_topics(self, request, subject_id=None):
        try:
            subject = Subject.objects.get(id=subject_id)
        except Subject.DoesNotExist:
            return Response({'error': 'Subject not found'}, status=404)

        # Assuming there is a reverse relation `topic_set`
        topics = subject.topic_set.all()
        serializer = TopicSerializer(topics, many=True)
        return Response({
            'topic_count': topics.count(),
            'topics': serializer.data
        })
    

class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['get'], url_path='quizzes/(?P<topic_id>[^/.]+)')
    def get_quizzes(self, request, topic_id=None):
        try:
            topic = Topic.objects.get(id=topic_id)
        except Topic.DoesNotExist:
            return Response({'error': 'Topic not found'}, status=404)
        

        quizzes = topic.quiz_set.all()
        serializer = QuizSerializer(quizzes, many=True)
        return Response({
            'topic': topic.title,
            'subject': topic.subject.title,
            'quiz_count': quizzes.count(),
            'quizzes': serializer.data
        })

class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['get'], url_path='questions/(?P<quiz_id>[^/.]+)')
    def get_questions(self, request, quiz_id=None):
        try:
            quiz = Quiz.objects.get(id=quiz_id)
        except Quiz.DoesNotExist:
            return Response({'error': 'Quiz not found'}, status=404)

        questions = quiz.question_set.all()
        serializer = QuestionSerializer(questions, many=True)
        return Response({
            'quiz': quiz.id,
            'topic': quiz.topic.title,
            'subject': quiz.topic.subject.title,
            'question_count': questions.count(),
            'questions': serializer.data
        })
    
    @action(detail=False, methods=['get'], url_path='attempts')
    def get_attempts(self, request):
        if not request.user.is_authenticated:
            return Response({'error': 'Authentication required'}, status=status.HTTP_401_UNAUTHORIZED)

        student = request.user
        attempted_quizzes = StudentQuizResult.objects.filter(student=student)

        attempts_data = []
        for attempt in attempted_quizzes:
            result_serializer = StudentQuizResultSerializer(attempt)
            quiz = Quiz.objects.get(id=attempt.quiz_id)
            serializer = QuizSerializer(quiz)
            data = {
                "attempt_info": result_serializer.data,
                "quiz_info": serializer.data
            }
            attempts_data.append(data)
        return Response(attempts_data, status=status.HTTP_200_OK)
    
    @action(detail=True, methods=['post'], url_path='submit')
    def submit_quiz(self, request, pk=None):
        try:
            quiz = self.get_object()
        except Quiz.DoesNotExist:
            return Response({'error': 'Quiz not found'}, status=status.HTTP_404_NOT_FOUND)

        if not request.user.is_authenticated:
            return Response({'error': 'Authentication required'}, status=status.HTTP_401_UNAUTHORIZED)


        student = request.user
        answers = request.data.get('answers', {})

        if StudentQuizResult.objects.filter(student=student, quiz=quiz).exists():
            return Response({'error': 'You have already attempted this quiz.'}, status=status.HTTP_400_BAD_REQUEST)

        correct_answers = 0
        total_questions = quiz.question_set.count()
        student_answers = []

        for question in quiz.question_set.all():
            user_answer_id = answers.get(str(question.id))
            if user_answer_id:
                try:
                    user_answer = question.answer_set.get(id=user_answer_id)
                    is_correct = user_answer.is_correct
                    if is_correct:
                        correct_answers += 1
                    student_answers.append(StudentAnswer(
                        student=student,
                        question=question,
                        selected_answer=user_answer,
                        is_correct=is_correct
                    ))
                except Answer.DoesNotExist:
                    continue

        score = (correct_answers / total_questions) * 100

        StudentQuizResult.objects.create(
            student=student,
            quiz=quiz,
            correct_answers=correct_answers,
            total_questions=total_questions,
            score=score
        )

        StudentAnswer.objects.bulk_create(student_answers)

        return Response({
            'total_questions': total_questions,
            'correct_answers': correct_answers,
            'score': score,
        }, status=status.HTTP_200_OK)
    
    @action(detail=True, methods=['get'], url_path='review')
    def review_quiz(self, request, pk=None):
        try:
            quiz = Quiz.objects.get(pk=pk)
        except Quiz.DoesNotExist:
            return Response({'error': 'Quiz not found'}, status=status.HTTP_404_NOT_FOUND)

        student = request.user
        student_answers = StudentAnswer.objects.filter(
            student=student, question__quiz=quiz)

        serialized_answers = []
        for answer in student_answers:
            correct_answer = answer.question.answer_set.filter(
                is_correct=True).first().content
            serialized_answer = {
                'question': answer.question.content,
                'selected_answer': answer.selected_answer.content if answer.selected_answer else None,
                'correct_answer': correct_answer,
                'is_correct': answer.selected_answer.content == correct_answer if answer.selected_answer else False
            }
            serialized_answers.append(serialized_answer)

        return Response({
            'quiz': quiz.id,
            'topic': quiz.topic.title,
            'grade': quiz.topic.subject.grade.id,
            'subject': quiz.topic.subject.title,
            'answers': serialized_answers
        }, status=status.HTTP_200_OK)

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticated]

class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticated]