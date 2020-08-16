from django.shortcuts import render
from django.http import JsonResponse
def profile(requests):

    return render(requests,'pages/userprofile.html')

def login(requests):
    if requests.is_ajax():
        return JsonResponse({'hello':"Hello"},status=200)
    return render(requests,'auth/login.html')
def logout(requests):
    pass
def register(requests):
    return render(requests,'auth/register.html')