from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user        = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user')
    full_name   = models.CharField(default="", max_length=50)
    image       = models.ImageField(upload_to='profile/%Y/%m/%d/')
    address     = models.TextField(default="")
    country     = models.CharField(default="",max_length=50)
    city        = models.CharField(default="",max_length=50)
    phone       = models.CharField(default="",max_length=15)
    zipcode     = models.CharField(default="",max_length=10)
    email       = models.EmailField(default="", max_length=254)

class CompanyProfile(models.Model):
    CompanyName = models.CharField(default="", max_length=50)
    companylogo = models.ImageField(upload_to='CompanyProfile/%Y/%m/%d/')
    address     = models.TextField(default="")
    country     = models.CharField(default="",max_length=50)
    city        = models.CharField(default="",max_length=50)
    phone       = models.CharField(default="",max_length=15)
    zipcode     = models.CharField(default="",max_length=10)
    email       = models.EmailField(default="", max_length=254)
    currency = models.CharField(max_length=4)
    
class ShopProfile(models.Model):
    Manager_name= models.CharField(default="", max_length=50)
    address     = models.TextField(default="")
    country     = models.CharField(default="",max_length=50)
    city        = models.CharField(default="",max_length=50)
    phone       = models.CharField(default="",max_length=15)
    zipcode     = models.CharField(default="",max_length=10)
   