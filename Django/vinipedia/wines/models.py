from django.db import models

from producers.models import Producer
from grapes.models import Grape
from django.contrib.auth.models import User
from django.urls import reverse
from django.db.models import Avg


# criacao do modelo para os vinhos

class Wine(models.Model):

    WINE_CHOICES = (
        ('Tinto', 'Tinto'),
        ('Branco', 'Branco'),
        ('Verde', 'Verde'),
        ('Rosé', 'Rosé'),
        ('Espumante', 'Espumante'),
        ('Licoroso', 'Licoroso'),
    )

    REGION_CHOICES = (
        ('Vinhos Verdes', 'Vinhos Verdes'),
        ('Trás-Os-Montes', 'Trás-Os-Montes'),
        ('Douro', 'Douro'),
        ('Tejo', 'Tejo'),
        ('Bairrada', 'Bairrada'),
        ('Dão', 'Dão'),
        ('Beiras', 'Beiras'),
        ('Lisboa', 'Lisboa'),
        ('Terras do Sado', 'Terras do Sado'),
        ('Alentejo', 'Alentejo'),
        ('Madeira', 'Madeira'),
    )

    name = models.CharField(max_length=80)

    description = models.TextField()

    producer = models.ForeignKey(Producer,
                                 on_delete=models.CASCADE,
                                 null=True,
                                 related_name="wine_producer")

    type = models.CharField(max_length=10,
                              choices=WINE_CHOICES,
                              blank=True)

    region = models.CharField(max_length=20,
                              choices=REGION_CHOICES,
                              blank=True)

    year = models.PositiveSmallIntegerField()

    price = models.FloatField(blank=True)

    grapes = models.ManyToManyField(Grape, related_name="wine")

    alcool_lvl = models.FloatField(blank=True)

    photo = models.ImageField(upload_to='wines_img', default='../media/images/default-bottle.png')

    class Meta:
        pass

    def __str__(self):
        return f'{self.name}'

    def get_absolute_url(self):
        return reverse('wines:wine_detail',
                       args=[self.id])

    # calcular a media de pontuacoes

    def average_score(self):
        average = self.evaluations.all().aggregate(Avg('score'))
        value = average.get('score__avg')
        if value == None:
            return 'Este vinho ainda não foi pontuado.'
        else:
            value = round(value, 1)
            return value


# criacao do modelo para as avaliacoes do vinho

class Evaluation(models.Model):

    SCORE_CHOICES = zip(range(0, 101), range(0, 101))

    wine = models.ForeignKey(Wine,
                             on_delete=models.CASCADE,
                             related_name='evaluations')

    user = models.ForeignKey(User,
                             on_delete=models.CASCADE,
                             related_name='user_evaluation')

    description = models.TextField()
    score = models.IntegerField(choices=SCORE_CHOICES, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        ordering = ('created',) #unique toguether

    def __str__(self):
        return f'Evaluation by {self.user.username} on {self.wine.name}'
