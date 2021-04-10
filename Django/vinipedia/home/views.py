from django.shortcuts import render
from producers.models import Producer
from grapes.models import Grape
from wines.models import Wine, Evaluation
import random


def home_view(request):
    wines = Wine.objects.all()
    producers = Producer.objects.all()
    grapes = Grape.objects.all()
    evaluations = Evaluation.objects.all()

    # lista de vinhos pontuados
    scored_wines = []
    for wine in wines:
        if type(wine.average_score()) == str:
            continue
        else:
            scored_wines.append(wine)

    # lista ordenada de melhor para pior
    sorted_wines = sorted(scored_wines, key=lambda x: x.average_score(), reverse=True)

    # melhores 3 vinhos
    top_wines = sorted_wines[0:3]

    # produtor aleatório
    featured_producer = random.choice(producers)

    # dicionário de contexto
    context = {
        'wines': wines,
        'producers': producers,
        'grapes': grapes,
        'evaluations': evaluations,
        'top_wines': top_wines,
        'featured_producer': featured_producer
    }

    return render(request, 'index.html', context)






