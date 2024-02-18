from django.db import models

# Create your models here.

class AdminLogin(models.Model):
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=50)



class StudentLogin(models.Model):
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=50)


class Student(models.Model) :
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=50)


class StudentTask(models.Model) :
    taskid = models.CharField(max_length=50)
    tast_name = models.CharField(max_length=50)
    tast_des = models.CharField(max_length=200)
    use_id = models.CharField(max_length=50)
    user_name = models.CharField(max_length=100)
    start_date = models.CharField(max_length=100)
    end_date = models.CharField(max_length=100)
    submit_date = models.CharField(max_length=100)