from rest_framework import serializers
from .models import CustomUser, Student


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
