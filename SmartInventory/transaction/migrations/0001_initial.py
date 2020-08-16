# Generated by Django 3.1 on 2020-08-15 16:26

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '0001_initial'),
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sales',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qty', models.IntegerField()),
                ('date', models.DateField(default=datetime.date.today)),
                ('Rate', models.DecimalField(decimal_places=2, max_digits=20)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=20)),
                ('total_ammount', models.DecimalField(decimal_places=2, max_digits=20)),
                ('paid_status', models.BooleanField()),
                ('Shop', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='authentication.shopprofile')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product')),
            ],
        ),
        migrations.CreateModel(
            name='Purchases',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Seller_name', models.CharField(max_length=255)),
                ('Seller_address', models.CharField(max_length=255)),
                ('Seller_phone', models.CharField(max_length=25)),
                ('date', models.DateField(default=datetime.date.today)),
                ('qty', models.IntegerField()),
                ('Rate', models.DecimalField(decimal_places=2, max_digits=20)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=20)),
                ('total_ammount', models.DecimalField(decimal_places=2, max_digits=20)),
                ('paid_status', models.BooleanField()),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Customer_name', models.CharField(max_length=255)),
                ('Customer_address', models.CharField(max_length=255)),
                ('Customer_phone', models.CharField(max_length=25)),
                ('Customer_country', models.CharField(max_length=255)),
                ('date', models.DateField(default=datetime.date.today)),
                ('qty', models.IntegerField()),
                ('Rate', models.DecimalField(decimal_places=2, max_digits=20)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=20)),
                ('total_ammount', models.DecimalField(decimal_places=2, max_digits=20)),
                ('paid_status', models.BooleanField()),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product')),
            ],
        ),
    ]