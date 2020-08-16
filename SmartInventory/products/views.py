from django.shortcuts import render
from django.http import JsonResponse

def product(requests):
    return render(requests,'pages/Product.html')


def brand(requests):
    return render(requests,'pages/brand.html')

def category(requests):
    return render(requests,'pages/category.html')