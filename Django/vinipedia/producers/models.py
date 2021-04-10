from django.db import models
from django.urls import reverse

# criacao do modelo para os produtores

class Producer(models.Model):

    name = models.CharField(max_length=50)
    description = models.TextField()
    address = models.CharField(max_length=200)
    website = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name}'

    def get_absolute_url(self):
        return reverse('producers:producer_detail',
                       args=[self.id])


# criacao do modelo para as imagens dos produtores

class ProducerPicture(models.Model):

    producer = models.ForeignKey(Producer, on_delete=models.CASCADE, related_name='producerpictures')
    pathname = models.ImageField(upload_to='producers_img', default='../media/images/default-barril.jpg')

    def __str__(self):
        return f'Picture of Producer: {self.producer.name}'
