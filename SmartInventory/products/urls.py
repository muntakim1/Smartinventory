from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('category',views.category,name='category'),
    path('category/<str:pk>/delete',views.delete_category,name='delete_category'),
    path('category/<str:pk>',views.edit_category,name='edit_category'),
    path('brand', views.brand, name='brand'),
    path('brand/<str:pk>/delete',views.delete_brand,name='delete_brand'),
    path('brand/<str:pk>', views.edit_brand, name='eidt_brand'),
    path('<str:pk>-<str:slug>',views.edit_product,name='edit_product'),
    path('<str:pk>-<str:slug>/delete',views.delete_product,name='delete_product'),
    path('',views.product,name='product')

]
