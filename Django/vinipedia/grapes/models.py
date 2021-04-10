from django.db import models
from django.urls import reverse


# criacao do modelo para as castas
class Grape(models.Model):

    name = models.CharField(max_length=50)
    description = models.TextField()
    photo = models.ImageField(upload_to='grapes_img', default='../media/images/default-grape.jpg')

    class Meta:
        pass

    def __str__(self):
        return f'{self.name}'

    def get_absolute_url(self):
        return reverse('grapes:grape_detail',
                       args=[self.id])


# criacao do modelo das imagens para as castas
class AromaPictures(models.Model):

    grape = models.ForeignKey(Grape, on_delete=models.CASCADE, related_name='aromapictures')
    pathname = models.ImageField(upload_to='aroma_img', blank=True)

    def __str__(self):
        return f'Picture of Aroma: {self.grape.name}'
