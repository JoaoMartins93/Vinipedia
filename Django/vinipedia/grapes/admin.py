from django.contrib import admin

# Register your models here.
from .models import Grape, AromaPictures

admin.site.register(Grape)
admin.site.register(AromaPictures)
