from django import forms  
from .models import Purchases,Sales,Order

class PurchaseForm(forms.ModelForm):
    class Meta:
        model = Purchases
        fields = '__all__'
class SalesForm(forms.ModelForm):
    class Meta:
        model = Sales
        fields = '__all__'
class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = '__all__'