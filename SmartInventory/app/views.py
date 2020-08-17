from django.shortcuts import render
from authentication.models import ShopProfile
from django.contrib.auth.decorators import login_required
# Create your views here.
def index(request):
    return render(request,'index.html')
    
@login_required(login_url='/profile/login')
def dashboard(requests):
    return render(requests,'pages/dashboard.html')

def shop(requests):
    return render(requests,'pages/shop.html')