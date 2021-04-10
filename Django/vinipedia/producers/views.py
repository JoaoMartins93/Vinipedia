
from django.shortcuts import render, get_object_or_404
from .models import Producer

# Create your views here.


# criacao da view do detalhe do produtor
def producer_detail(request, id):
    producer = get_object_or_404(Producer, pk=id)

    return render(request,
                  'producers/detail.html',
                  {'producer': producer})


# criacao da view para listar os produtores
def producer_list(request):
    producers = Producer.objects.all()

    return render(request,
                  'producers/list.html',
                  {'producers': producers})


# pesquisa de produtores por nome
def search(request):
    query = request.GET.get("query")
    results = Producer.objects.filter(name__contains=query)
    return render(request,
                  'vinipedia/searchProducer.html',
                  {'results': results})
