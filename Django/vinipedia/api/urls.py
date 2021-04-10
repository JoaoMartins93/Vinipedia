
from django.urls import path, include
from api import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'wines', views.WineViewSet)
router.register(r'grapes', views.GrapeViewSet)
router.register(r'producers', views.ProducerViewSet)


urlpatterns = [
    path('', include(router.urls))
]