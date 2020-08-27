from django import forms  
from authentication.models import ShopProfile

class ShopForm(forms.ModelForm):
    class Meta:
        model = ShopProfile
        fields = '__all__'