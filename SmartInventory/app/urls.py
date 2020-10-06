from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('dashboard',views.dashboard,name='dashboard'),
    path('shop',views.shop,name='shop'),
    path('shop/<str:pk>',views.edit_shop,name='edit_shop'),
    path('shop/<str:pk>/delete',views.delete_shop,name='delete_shop'),

    path('employee',views.Employees,name='employee'),
    path('employee/<str:pk>',views.edit_Employee,name='edit_employee'),
    path('employee/<str:pk>/delete',views.delete_Employee,name='delete_employee'),


]
