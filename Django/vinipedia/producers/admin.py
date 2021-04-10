from django.contrib import admin

# Register your models here.
from .models import Producer, ProducerPicture

admin.site.register(Producer)
admin.site.register(ProducerPicture)