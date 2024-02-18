from rest_framework import routers
from .views import *


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)


adminloginrouter = routers.DefaultRouter()
adminloginrouter.register(r'adminlogin', AdminLoginViewSet)


task = routers.DefaultRouter()
task.register(r'studenttask', TaskViewSet)
