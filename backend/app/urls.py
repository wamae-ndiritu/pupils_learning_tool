from django.urls import path
from .views import register_user, login, get_users

urlpatterns = [
    path('users/register/', register_user),
    path('users/login/', login),
    path('users/', get_users),
]