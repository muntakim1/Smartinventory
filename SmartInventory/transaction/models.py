from django.db import models
from products.models import  Product
from authentication.models import ShopProfile
# Create your models here.

class Order(models.Model):
    Customer_name = models.CharField(max_length=255)
    Customer_address = models.CharField(max_length=255)
    Customer_phone   = models.CharField(max_length=25)
    Customer_country = models.CharField(max_length=255)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    qty = models.IntegerField()
    Rate = models.DecimalField(max_digits=20,decimal_places=2)
    amount = models.DecimalField(max_digits=20,decimal_places=2)
    total_ammount = models.DecimalField(max_digits=20,decimal_places=2)
    paid_status = models.BooleanField()

class Purchases (models.Model):
    Seller_name = models.CharField(max_length=255)
    Seller_address = models.CharField(max_length=255)
    Seller_phone = models.CharField(max_length=25)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    qty = models.IntegerField()
    Rate = models.DecimalField(max_digits=20,decimal_places=2)
    amount = models.DecimalField(max_digits=20,decimal_places=2)
    total_ammount = models.DecimalField(max_digits=20,decimal_places=2)
    paid_status = models.BooleanField()

class Sales(models.Model):
    Shop = models.ForeignKey(ShopProfile,on_delete=models.CASCADE)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    qty = models.IntegerField()
    Rate = models.DecimalField(max_digits=20,decimal_places=2)
    amount = models.DecimalField(max_digits=20,decimal_places=2)
    total_ammount = models.DecimalField(max_digits=20,decimal_places=2)
    paid_status = models.BooleanField()