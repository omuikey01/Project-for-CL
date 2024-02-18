from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *

# Create your views here.


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = UserSerializer

class AdminLoginViewSet(viewsets.ModelViewSet):
    queryset = AdminLogin.objects.all()
    serializer_class = AdminLoginSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = StudentTask.objects.all()
    serializer_class = TaskSerializer