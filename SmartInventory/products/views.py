from django.shortcuts import render
from django.http import JsonResponse
from .models import Category,Brand,Product
from django.core import serializers
from .forms import ProductForm  
def product(requests):
    products = serializers.serialize("json", Product.objects.all())
    
    Categories_obj=Category.objects.all().values_list('pk','Category_Name')
    brands_obj= Brand.objects.all().values_list('pk','brand_Name')
    Categories = [x for x in Categories_obj ]
    brands = [x for x in brands_obj ]
    
    if requests.is_ajax():
        return JsonResponse({'brand':brands,'category':Categories,'products':products})
    if requests.method == 'POST':
        f = ProductForm(requests.POST)
        if f.is_valid():
            f.save()
    else:
        f = ProductForm()
    return render(requests,'pages/Product.html',{'form':f})


def brand(requests):
    brandName= requests.GET.get('brand')
    slugName= requests.GET.get('slug')
    if(brandName != None and slugName != None):
        brand=Brand(brand_Name=brandName,Slug=slugName)
        brand.save()
    brands = serializers.serialize("json", Brand.objects.all())
    
    if requests.is_ajax():
        return JsonResponse(brands,status=200,safe=False)
    return render(requests,'pages/brand.html')

def category(requests):
    categoryName= requests.GET.get('category')
    slugName= requests.GET.get('slug')
    if(categoryName != None and slugName != None):
        category=Category(Category_Name=categoryName,Slug=slugName)
        category.save()
    catergories = serializers.serialize("json", Category.objects.all())
    
    if requests.is_ajax():
        return JsonResponse(catergories,status=200,safe=False)
    return render(requests,'pages/category.html')