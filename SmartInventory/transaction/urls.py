from django.urls import path
from . import views
urlpatterns = [

    path('sales',views.sales,name='sales'),
    path('orders',views.order,name='orders'),
    path('purchase',views.purchase,name='purchase'),
    path('reports',views.Reports,name='reports'),


]	