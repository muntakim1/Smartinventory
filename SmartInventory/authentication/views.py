from django.shortcuts import render,redirect
from django.http import JsonResponse,HttpResponse
from django.contrib.auth import logout,login,authenticate

from django.contrib.auth.forms import UserCreationForm
def profile(requests):

    return render(requests,'pages/userprofile.html')

def login_view(requests):
    username= requests.GET.get('username')
    password = requests.GET.get('password')
    
    user = authenticate(username=username, password=password)
    if requests.is_ajax():
        if user is not None :
            login(requests, user)
            return HttpResponse('fine')
        else:
            return HttpResponse('bad')
        
    return render(requests,'auth/login.html')


def logout_view(requests):
    logout(requests)
    return redirect('/')

def register(requests):
    if requests.method == 'POST':
        f = UserCreationForm(requests.POST)
        if f.is_valid():
            f.save()
            return redirect('profile')
 
    else:
        f = UserCreationForm()
    return render(requests,'auth/register.html',{'form': f})