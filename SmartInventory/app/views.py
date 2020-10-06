from django.shortcuts import render,redirect
from django.http import JsonResponse
from authentication.models import ShopProfile
from django.core import serializers
from django.contrib.auth.decorators import login_required
from .forms import ShopForm,EmployeeForm
from django.db.models import Sum
from transaction.models import Sales, Order,Purchases
from .models import Employee
# Create your views here.
def index(request):
    return render(request,'index.html')
    
@login_required(login_url='/profile/login')
def dashboard(requests):
    sales= Sales.objects.all().values_list('date','amount')
    order= Order.objects.all().values_list('date','amount')
    purchases= Purchases.objects.all().values_list('date','amount')
    total_sales= Sales.objects.aggregate(total_price=Sum('amount'))
    total_purchase= Purchases.objects.aggregate(total_price=Sum('amount'))
    total_order= Order.objects.aggregate(total_price=Sum('amount'))
    if total_sales['total_price'] is None or total_purchase['total_price'] is None or total_order['total_price'] is None:
        total_sales['total_price']=0
        total_order['total_price']=0
        total_purchase['total_price']=0
    revinue=(float(total_sales['total_price']))-(float(total_purchase['total_price']))
    
    total_revinue=0
    if revinue>0:
        total_revinue=revinue
    else:
        total_revinue=0

    sale = [s for s in sales]
    orders =[o for o in order] 
    purchase=[purchas for purchas in purchases]
    if requests.is_ajax():
        return JsonResponse({'purchase':purchase,'sale':sale,'order':orders})
    return render(requests,'pages/dashboard.html',{'total_sales':total_sales,'total_purchase':total_purchase,'total_order':total_order,'total_revinue':total_revinue})

def shop(requests):
    shop = serializers.serialize("json", ShopProfile.objects.all())
    f= ShopForm()       
    if requests.method == 'POST':
        f = ShopForm(requests.POST)
        if f.is_valid():
            f.save()
            return redirect('shop')
    else:
        f = ShopForm()
    if requests.is_ajax():
        return JsonResponse({'shop':shop})
    return render(requests,'pages/shop.html',{'form':f})

def edit_shop(requests,pk):
    instance = ShopProfile.objects.get(id=pk)
    form=ShopForm(instance=instance)
    if request.method == 'POST':
        form= ShopForm(request.POST,instance=instance)
        if form.is_valid():
            form.save()
            return redirect('shop')
        else:
            form= ShopForm(instance=instance)
    
    return render(request,'pages/edit_shop.html',{'form':form})

def delete_shop(requests,pk):
    ShopProfile.objects.filter(pk=pk).delete()
    return redirect('shop')

def Employees(requests):
    employees = serializers.serialize("json", Employee.objects.all())
    print(employees)
    f= EmployeeForm()       
    if requests.method == 'POST':
        f = EmployeeForm(requests.POST)
        if f.is_valid():
            f.save()
            return redirect('employee')
    else:
        f = EmployeeForm()
    if requests.is_ajax():
        return JsonResponse({'employees':employees})
    return render(requests,'pages/employee.html',{'form':f})

def edit_Employee(requests,pk):
    instance = Employee.objects.get(id=pk)
    form=EmployeeForm(instance=instance)
    if request.method == 'POST':
        form= EmployeeForm(request.POST,instance=instance)
        if form.is_valid():
            form.save()
            return redirect('employee')
        else:
            form= EmployeeForm(instance=instance)
    
    return render(request,'pages/edit_employee.html',{'form':form})

def delete_Employee(requests,pk):
    Employee.objects.filter(pk=pk).delete()
    return redirect('employee')