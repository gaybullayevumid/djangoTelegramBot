from django.urls import path

from djangoTelegramBot.urls import urlpatterns
from .views import UserListAPIView


urlpatterns = [
    path('', UserListAPIView.as_view()),
]