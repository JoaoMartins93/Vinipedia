from django.urls import path
from . import views

app_name = "producers"

# urls dos produtores

urlpatterns = [
    path('<int:id>', views.producer_detail, name='producer_detail'),
    path('', views.producer_list, name='producer_list'),
    path('search', views.search, name='search')
]
