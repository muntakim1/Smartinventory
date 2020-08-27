from django.shortcuts import render,redirect
from django.http import JsonResponse
from .models import *
from django.core import serializers
from .forms import OrderForm, SalesForm, PurchaseForm
from products.models import Product

def order(requests):
    order = serializers.serialize("json", Order.objects.all())
    f= OrderForm()       
    if requests.method == 'POST':
        
        f = OrderForm(requests.POST)
        if f.is_valid():
            f.save()
            return redirect('order')
    else:
        f = OrderForm()
    if requests.is_ajax():
        return JsonResponse({'order':order})
    else:
        return render(requests,'pages/order.html',{'form':f})

    return render(requests,'pages/order.html',{'form':f})
    
def edit_order(requests,pk,slug):
    instance = Order.objects.get(id=pk)
    print(instance)
    form=OrderForm(instance=instance)
    if request.method == 'POST':
        form= OrderForm(request.POST,request.FILES,instance=instance)
        if form.is_valid():
            form.save()
            return redirect('purchase')
        else:
            form= OrderForm(request.FILES,instance=instance)
    
    return render(request,'pages/edit_order.html',{'form':form})

def delete_order(requests,pk,slug):
    Purchases.objects.filter(pk=pk).delete()
    return redirect('purchase')
def purchase(requests):
    product_obj=Product.objects.all().values_list('pk','Product_Name')
    purchases = serializers.serialize("json", Purchases.objects.all())
    product = [x for x in product_obj ]
    f= PurchaseForm()       
    if requests.method == 'POST':
        
        f = PurchaseForm(requests.POST)
        if f.is_valid():
            f.save()
            return redirect('purchase')
    else:
        f = PurchaseForm()
    if requests.is_ajax():
        return JsonResponse({'purchases':purchases,'products':product})
    else:
        return render(requests,'pages/Purchase.html',{'form':f})
    return render(requests,'pages/Purchase.html',{'form':f})
    

def edit_purchase(requests,pk,slug):
    instance = Purchases.objects.get(id=pk)
    print(instance)
    form=PurchaseForm(instance=instance)
    if request.method == 'POST':
        form= PurchaseForm(request.POST,request.FILES,instance=instance)
        if form.is_valid():
            form.save()
            return redirect('purchase')
        else:
            form= PurchaseForm(request.FILES,instance=instance)
    
    return render(request,'pages/edit_purcheses.html',{'form':form})

def delete_purchase(requests,pk,slug):
    Purchases.objects.filter(pk=pk).delete()
    return redirect('purchase')
def sales(requests):
    sales = serializers.serialize("json", Sales.objects.all())
    f= SalesForm()       
    if requests.method == 'POST':
        
        f = SalesForm(requests.POST)
        if f.is_valid():
            f.save()
            return redirect('sales')
    else:
        f = SalesForm()
    if requests.is_ajax():
        return JsonResponse({'sales':sales})
    else:
        return render(requests,'pages/Sales.html',{'form':f})
    return render(requests,'pages/Sales.html',{'form':f})

def edit_sales(requests,pk,slug):
    instance = Sales.objects.get(id=pk)
    print(instance)
    form=SalesForm(instance=instance)
    if request.method == 'POST':
        form= SalesForm(request.POST,request.FILES,instance=instance)
        if form.is_valid():
            form.save()
            return redirect('sales')
        else:
            form= SalesForm(request.FILES,instance=instance)
    
    return render(request,'pages/edit_sales.html',{'form':form})

def delete_sales(requests,pk,slug):
    Sales.objects.filter(pk=pk).delete()
    return redirect('sales')

def Reports(requests):

    return render(requests,'pages/reports.html')
    