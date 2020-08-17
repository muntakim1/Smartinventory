from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('user',views.profile,name='profile'),
    path('login',views.login_view,name='login'),
    path('register',views.register,name='register'),
    path('logout',views.logout_view,name='logout')
]
