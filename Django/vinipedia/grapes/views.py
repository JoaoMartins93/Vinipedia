from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from .models import Grape

# Create your views here.


# criacao das views para o detail das castas
def grape_detail(request, id):
    grape = get_object_or_404(Grape, pk=id)

    return render(request,
                  'grapes/detail.html',
                  {'grape': grape})

# criacao das views para as listas das castas
def grape_list(request):
    grapes = Grape.objects.all()

    return render(request,
                  'grapes/list.html',
                  {'grapes': grapes})


# criacao da view para a pesquisa de castas po nome
def search(request):
    query = request.GET.get("query")
    results = Grape.objects.filter(name__contains=query)
    return render(request,
                  'vinipedia/searchGrape.html',
                  {'results': results})
