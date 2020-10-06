from django import forms  
from .models import Purchases,Sales,Order


class DateInput(forms.DateInput):
    input_type = 'date'

class PurchaseForm(forms.ModelForm):
    class Meta:
        model = Purchases
        fields = '__all__'
        widgets= {
            'date': DateInput()
        }
class SalesForm(forms.ModelForm):
    class Meta:
        model = Sales
        fields = '__all__'
        widgets= {
            'date': DateInput()
        }
class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = '__all__'
        widgets= {
            'date': DateInput()
        }