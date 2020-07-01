from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('products.urls')),
    
    path('profile', include('authentication.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

handler404 = 'products.views.handler404'
handler500 = 'products.views.handler500'