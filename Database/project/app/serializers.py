from rest_framework import serializers
from .models import *
# Serializers define the API representation.
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"

class AdminLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminLogin
        fields = "__all__"

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentTask
        fields = "__all__"