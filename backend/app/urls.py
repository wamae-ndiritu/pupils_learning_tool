from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import register_user, login, get_users, StudentViewSet, GradeViewSet, TopicViewSet, QuizViewSet, QuestionViewSet, AnswerViewSet, SubjectViewSet

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'grades', GradeViewSet)
router.register(r'topics', TopicViewSet)
router.register(r'quizzes', QuizViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'answers', AnswerViewSet)
router.register(r'subjects', SubjectViewSet)

urlpatterns = [
    path('users/register/', register_user),
    path('users/login/', login),
    path('users/', get_users),
    path('', include(router.urls)),
]