from django.db import models
from django.conf import settings


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='profile_img', default='../media/images/default-profile-picture.jpg')

    def __str__(self):
        return f'Profile for user {self.user.username}'
