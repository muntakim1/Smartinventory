from django.shortcuts import render
from authentication.models import ShopProfile
from django.core import serializers
from django.contrib.auth.decorators import login_required
from .forms import ShopForm
# Create your views here.
def index(request):
    return render(request,'index.html')
    
@login_required(login_url='/profile/login')
def dashboard(requests):
    return render(requests,'pages/dashboard.html')

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
        return JsonResponse({'sales':sales})
    else:
        return render(requests,'pages/shop.html',{'form':f})
    return render(requests,'pages/shop.html',{'form':f})
def edit_shop(requests,pk):
    instance = ShopProfile.objects.get(id=pk)
    print(instance)
    form=ShopForm(instance=instance)
    if request.method == 'POST':
        form= ShopForm(request.POST,request.FILES,instance=instance)
        if form.is_valid():
            form.save()
            return redirect('shop')
        else:
            form= ShopForm(request.FILES,instance=instance)
    
    return render(request,'pages/edit_shop.html',{'form':form})

def delete_shop(requests,pk):
    ShopProfile.objects.filter(pk=pk).delete()
    return redirect('shop')