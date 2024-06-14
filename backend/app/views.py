from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import action
from .models import CustomUser, Grade, Student, Subject, Topic, Question, Quiz, Answer
from .serializers import CustomUserSerializer, StudentSerializer, GradeSerializer, SubjectSerializer, TopicSerializer, QuestionSerializer, QuizSerializer, AnswerSerializer 
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

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticated]

class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticated]