from rest_framework import serializers
from .models import CustomUser, Student, Grade, Subject, Topic, Quiz, Question, Answer, StudentQuizResult


class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True)  # Set password as write-only

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'full_name', 'email', 'contact',
                  'user_type', 'is_staff', 'is_active', 'password']
        read_only_fields = ['id'] 

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            **validated_data)
        return user


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['user']

class GradeSerializer(serializers.ModelSerializer):
    subject_count = serializers.SerializerMethodField()
    class Meta:
        model = Grade
        fields = ['grade_no', 'subject_count']
    
    def get_subject_count(self, obj):
        return obj.subject_set.count()

class SubjectSerializer(serializers.ModelSerializer):
    topic_count = serializers.SerializerMethodField()
    class Meta:
        model = Subject
        fields = ['id', 'grade', 'title', 'image_url', 'description', 'topic_count']

    def get_topic_count(self, obj):
        return obj.topic_set.count()

class TopicSerializer(serializers.ModelSerializer):
    quiz_count = serializers.SerializerMethodField()
    class Meta:
        model = Topic
        fields = ['id', 'subject', 'title', 'description', 'quiz_count']

    def get_quiz_count(self, obj):
        return obj.quiz_set.count()


class QuizSerializer(serializers.ModelSerializer):
    question_count = serializers.SerializerMethodField()
    class Meta:
        model = Quiz
        fields = ['topic', 'id', 'question_count']
    
    def get_question_count(self, obj):
        return obj.question_set.count()
    

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['id', 'question', 'content', 'is_correct']


class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True, read_only=True, source='answer_set')
    class Meta:
        model = Question
        fields = ['id', 'quiz', 'content', 'answers']


class StudentQuizResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentQuizResult
        fields = '__all__'

