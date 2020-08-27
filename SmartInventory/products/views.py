from django.shortcuts import render,redirect,HttpResponse,get_object_or_404
from django.http import JsonResponse
from .models import Category,Brand,Product
from django.core import serializers
from .forms import ProductForm,BrandForm,CategoryForm

def product(requests):
    products = serializers.serialize("json", Product.objects.all())
    Categories_obj=Category.objects.all().values_list('pk','Category_Name')
    brands_obj= Brand.objects.all().values_list('pk','brand_Name')
    Categories = [x for x in Categories_obj ]
    brands = [x for x in brands_obj ]
    f= ProductForm()    
    
    if requests.method == 'POST':
        f = ProductForm(requests.POST,requests.FILES)
        if f.is_valid():
            f.save()
            return redirect('product')
    else:
        f = ProductForm()
    if requests.is_ajax():
        return JsonResponse({'brand':brands,'category':Categories,'products':products})
    
        
    return render(requests,'pages/Product.html',{'form':f})

def edit_product(request,pk,slug):
    instance = Product.objects.get(id=pk)
    form=ProductForm(instance=instance)
    if request.method == 'POST':
        form= ProductForm(request.POST,request.FILES,instance=instance)
        if form.is_valid():
            form.save()
            return redirect('product')
        else:
            form= ProductForm(request.FILES,instance=instance)
    
    return render(request,'pages/edit_product.html',{'form':form})

def delete_product(request,pk,slug):
    Product.objects.filter(pk=pk).delete()
    return redirect('product')

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

def edit_brand(request,pk):
    instance=Brand.objects.get(id=pk)
    form = BrandForm(instance=instance)
    if request.method=='POST':
        form = BrandForm(request.POST,instance=instance)
        if form.is_valid():
            form.save()
            return redirect('brand')
    else:
        form = BrandForm(instance=instance)
    return render(request,'pages/edit_brand.html',{ 'form': form})

def delete_brand(request,pk):
    Brand.objects.filter(pk=pk).delete()
    return redirect('brand')

def edit_category(request,pk):
    instance=Category.objects.get(id=pk)
    form = CategoryForm(instance=instance)
    if request.method=="POST":
        form = CategoryForm(request.POST,instance=instance)
        if form.is_valid():
            form.save()
            return redirect('category')
    else:
        form = CategoryForm(instance=instance)
    return render(request,'pages/edit_brand.html',{ 'form': form})

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

def delete_category(request,pk):
    Category.objects.filter(pk=pk).delete()
    return redirect('category')