from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('category',views.category,name='category'),
    path('brand', views.brand, name='brand'),
    path('',views.product,name='product')
]
