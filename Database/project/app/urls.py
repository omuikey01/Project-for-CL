from django.urls import path, include
from .routers import *


urlpatterns = [
    path('user/', include(router.urls)),
    path('admin/', include(adminloginrouter.urls)),
    path('task/', include(task.urls)),
    # path('', include('rest_framework.urls', namespace='rest_framework'))
]