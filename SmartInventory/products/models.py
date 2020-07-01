from django.db import models


class Category(models.Model):
    Category_Name = models.CharField(max_length=255)
    Slug = models.SlugField(max_length=255)
    
class Product (models.Model):
    Product_Name = models.CharField(max_length=255)