# Generated by Django 3.1 on 2020-10-06 12:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('authentication', '0003_remove_shopprofile_manager_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255)),
                ('birthday', models.DateField(blank=True)),
                ('join_date', models.DateField(blank=True)),
                ('designation', models.CharField(max_length=255)),
                ('salary', models.DecimalField(decimal_places=2, max_digits=10)),
                ('shop', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='authentication.shopprofile')),
            ],
        ),
    ]
