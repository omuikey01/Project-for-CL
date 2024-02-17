from django.shortcuts import render
from rest_framework import viewsets
from .models import Student
from .serializers import UserSerializer

# Create your views here.


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = UserSerializer