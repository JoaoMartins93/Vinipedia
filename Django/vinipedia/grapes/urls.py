from django.urls import path
from . import views

app_name = "grapes"

# urls das castas

urlpatterns = [
    path('<int:id>', views.grape_detail, name='grape_detail'),
    path('', views.grape_list, name='grape_list'),
    path('search', views.search, name='search')
]
