from django.contrib import admin

# Register your models here.
from .models import Wine, Evaluation

admin.site.register(Wine)
admin.site.register(Evaluation)

