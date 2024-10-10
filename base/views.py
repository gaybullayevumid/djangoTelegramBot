from django.shortcuts import render
from .models import User
from .serializers import UserSerializer
from rest_framework import generics

# Create your views here.

class UserListAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer