from rest_framework import serializers
from .models import CustomUser, Student, Grade, Subject, Topic, Quiz, Question, Answer


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
    class Meta:
        model = Grade
        fields = ['grade_no']

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['id', 'grade', 'title', 'image_url', 'description']

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ['subject', 'title', 'description']

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ['topic']

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['quiz', 'content']

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['question', 'content', 'is_correct']
