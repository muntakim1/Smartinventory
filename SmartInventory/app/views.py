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
    sales= Sales.objects.all().order_by('-id')[:10].values_list('date','amount')
    employees= Employee.objects.all()
    order= Order.objects.all().order_by('-id')[:10].values_list('date','amount')
    purchases= Purchases.objects.all().order_by('-id')[:10].values_list('date','amount')
    total_sales= Sales.objects.aggregate(total_price=Sum('amount'))
    total_purchase= Purchases.objects.aggregate(total_price=Sum('amount'))
    total_order= Order.objects.aggregate(total_price=Sum('amount'))
    total_revinue=0

    if total_sales['total_price'] is None and total_purchase['total_price'] is None and total_order['total_price'] is None:
        total_sales['total_price']=0
        total_order['total_price']=0
        total_purchase['total_price']=0



    revinue=(float(total_sales['total_price']))-(float(total_purchase['total_price']))
    
    print(revinue)
    if revinue>0:
        total_revinue=revinue
    else:
        total_revinue=0
    # print(employees)
    # emp = [e for e in employees]
    sale = [s for s,m in sales]
    s_m = [m for s,m in sales]
    saless = [{'date':sale},{'sales':s_m}]
    order_s = [s for s,m in order]
    o_m = [m for s,m in order]
    orders = [{'date':order_s},{'order':o_m}]
    purchase_s = [s for s,m in purchases]
    p_m = [m for s,m in purchases]
    purchase = [{'date':purchase_s},{'purchase':p_m}]

    if requests.is_ajax():
        return JsonResponse({'purchase':purchase,'sale':saless,'order':orders})
    return render(requests,'pages/dashboard.html',{'total_sales':total_sales,'total_purchase':total_purchase,
                'total_order':total_order,'total_revinue':total_revinue,'employee':employees})

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