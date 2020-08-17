from django.db import models


class Category(models.Model):
    Category_Name = models.CharField(max_length=255)
    Slug = models.SlugField(max_length=255)
    def __str__(self):
       return self.Category_Name

class Brand(models.Model):
    brand_Name = models.CharField(max_length=255)
    Slug = models.SlugField(max_length=255)
    def __str__(self):
       return self.brand_Name
    
class Product (models.Model):
    Product_Name = models.CharField(max_length=255)
    Category = models.ForeignKey(Category,on_delete=models.CASCADE)
    image       = models.ImageField(upload_to='product/%Y/%m/%d/')
    Slug = models.SlugField(max_length=255)
    price = models.DecimalField(max_digits=20,decimal_places=2)
    qty = models.IntegerField()
    description = models.TextField()
    color = models.CharField(max_length=255)
    Brand= models.ForeignKey(Brand,on_delete=models.CASCADE)
    size = models.CharField(max_length=4)
    available = models.BooleanField()
    def __str__(self):
       return self.Product_Name
