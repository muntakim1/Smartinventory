from django.shortcuts import render
from django.http import JsonResponse
from .models import *

def order(requests):
    order={x.pk:x for x in Order.objects.all()}
    print(order)
    if requests.is_ajax():
        return JsonResponse(order,status=200)
    return render(requests,'pages/order.html')

def purchase(requests):
    return render(requests,'pages/Purchase.html')
    

def sales(requests):
    return render(requests,'pages/Sales.html')
    

def Reports(requests):
    return render(requests,'pages/reports.html')
    