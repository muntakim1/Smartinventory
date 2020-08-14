from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'pages/index.html')

def dashboard(requests):
    return render(requests,'pages/echarts.html')

def handler404(request, exception):
    context = {}
    response = render(request, "errors/page_404.html", context=context)
    response.status_code = 404
    return response


def handler500(request):
    context = {}
    response = render(request, "errors/page_500.html", context=context)
    response.status_code = 500
    return response