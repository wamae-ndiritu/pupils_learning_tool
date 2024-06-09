from django.contrib import admin
from .models import CustomUser, Student

admin.sites.register(CustomUser)
admin.sites.register(Student)
