from django.contrib import admin
from .models import CustomUser, Student, Grade, Subject, Topic, Quiz, Question, Answer

admin.site.register(CustomUser)
admin.site.register(Student)
admin.site.register(Grade)
admin.site.register(Subject)
admin.site.register(Topic)
admin.site.register(Quiz)
admin.site.register(Question)
admin.site.register(Answer)
