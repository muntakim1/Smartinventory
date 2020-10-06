from django import forms  
from authentication.models import ShopProfile
from .models import Employee

class ShopForm(forms.ModelForm):
    class Meta:
        model = ShopProfile
        fields = '__all__'


class DateInput(forms.DateInput):
    input_type = 'date'
class EmployeeForm(forms.ModelForm):
    class Meta:
        model = Employee
        fields = '__all__'
        widgets = {
            'birthday': DateInput(),
            'join_date': DateInput()
        }