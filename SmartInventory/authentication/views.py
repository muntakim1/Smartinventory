from django.shortcuts import render

def profile(requests):
    return render(requests,'pages/profile.html')

def login(requests):
    return render(requests,'pages/login.html')