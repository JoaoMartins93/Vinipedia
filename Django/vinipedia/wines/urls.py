from django.urls import path
from . import views

app_name = "wines"

# urls da aplicacao de vinhos

urlpatterns = [
    path('<int:id>', views.wine_detail, name='wine_detail'),
    path('', views.wine_list, name='wine_list'),
    path('search', views.search, name='search'),
    path('search_region', views.search_region, name='search_region'),
    path('search_producer', views.search_producer, name='search_producer'),
    path('search_grapes', views.search_grapes, name='search_grapes'),
    path('filter_search', views.filter_search, name='filter_search'),
]
