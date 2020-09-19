"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from users import views as user_form
from app import views as app_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/',user_form.register,name = 'register'),
    path('login/',user_form.Login,name = 'login'),
    path('process/',app_view.processImage,name = 'process_image'),
    path('mood/', app_view.getMood, name='get_mood')
]
