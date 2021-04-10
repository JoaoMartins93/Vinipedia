from django.shortcuts import render, get_object_or_404, redirect
from .models import Wine
from .forms import EvaluationForm


# Create your views here.

# criacao da view da lista de vinhos

def wine_list(request):
    wines = Wine.objects.all()

    return render(request,
                  'wines/list.html',
                  {'wines': wines})


# criacao da view de detalhe para cada vinho
# possibilidade de comentar o vinho caso o utilizador esteja autenticado

def wine_detail(request, id):
    wine = get_object_or_404(Wine, pk=id)
    wines = Wine.objects.all()

    same_type = 0
    same_region = 0
    same_producer = 0
    for w in wines:
        if w.type == wine.type:
            same_type += 1
        if w.region == wine.region:
            same_region += 1
        if w.producer == wine.producer:
            same_producer += 1

    new_evaluation = None

    if request.method == 'POST':
        evaluation_form = EvaluationForm(data=request.POST) # pre-popular formulario com os dados do comentário
        if evaluation_form.is_valid():
            new_evaluation = evaluation_form.save(commit=False)
            new_evaluation.wine = wine
            new_evaluation.user = request.user
            new_evaluation.save()
            return redirect(wine)

    elif request.method == 'GET':
        evaluation_form = EvaluationForm()

    response = render(request,
                      'wines/detail.html',
                      {
                          'wine': wine,
                          'wines': wines,
                          'comment_form': evaluation_form,
                          'new_comment': new_evaluation,
                          'same_type': same_type,
                          'same_region': same_region,
                          'same_producer': same_producer,
                      })
    return response


# pesquisa de vinhos por nome

def search(request):
    query = request.GET.get("query")
    results = Wine.objects.filter(name__contains=query)
    return render(request,
                  'vinipedia/searchWine.html',
                  {'results': results})


# pesquisa de vinhos por regiao

def search_region(request):
    query = request.GET.get("query")
    results = Wine.objects.filter(region__contains=query)
    return render(request,
                  'vinipedia/searchWine.html',
                  {'results': results})


# pesquisa de vinhos por produtor

def search_producer(request):
    query = request.GET.get("query")
    results = Wine.objects.filter(producer__name__contains=query)
    return render(request,
                  'vinipedia/searchWine.html',
                  {'results': results})


# pesquisa de vinhos por castas

def search_grapes(request):
    query = request.GET.get("query")
    results = Wine.objects.filter(grapes__name__contains=query)
    return render(request,
                  'vinipedia/searchWine.html',
                  {'results': results})


# filtrar pesquisa de vinhos por tipo ou regiao ou pelos dois em conjunto

def filter_search(request):
    query1 = request.GET.get("tipo")
    query2 = request.GET.get("região")

    if query1 is None:
        results = Wine.objects.filter(region__contains=query2)

    elif query2 is None:
        results = Wine.objects.filter(type__contains=query1)
    else:
        type_query = Wine.objects.filter(type__contains=query1)
        region_query = Wine.objects.filter(region__contains=query2)

        results = type_query.intersection(region_query)

    return render(request,
                  'vinipedia/searchWine.html',
                  {'results': results})
