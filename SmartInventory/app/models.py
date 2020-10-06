from django.db import models
from authentication.models import ShopProfile

class Employee(models.Model):
    full_name = models.CharField(max_length=255)
    address= models.CharField(max_length=255)
    birthday= models.DateField(blank=True)
    join_date= models.DateField(blank=True)
    designation = models.CharField(max_length=255)
    salary = models.DecimalField(max_digits=10,decimal_places=2)
    shop = models.ForeignKey(ShopProfile,on_delete=models.CASCADE)

