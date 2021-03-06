from django.urls import path
from . import views
urlpatterns = [

    path('sales/',views.sales,name='sales'),
    path('sales/<str:pk>',views.edit_sales,name='edit_sales'),
    path('sales/<str:pk>/delete',views.delete_sales,name='delete_sales'),

    path('orders/',views.order,name='orders'),
    path('orders/<str:pk>',views.edit_order,name='edit_order'),
    path('orders/<str:pk>/delete',views.delete_order,name='delete_order'),

    path('purchase/',views.purchase,name='purchase'),
    path('purchase/<str:pk>',views.edit_purchase,name='edit_purchase'),
    path('purchase/<str:pk>/delete',views.delete_purchase,name='delete_purchase'),
    
    path('reports/',views.Reports,name='reports'),
    path('invoice/<str:pk>/<str:value>',views.Invoice,name='invoice'),


]	