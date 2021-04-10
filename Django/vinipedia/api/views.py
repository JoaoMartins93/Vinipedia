from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet

from wines.models import Wine
from grapes.models import Grape
from producers.models import Producer

from .serializers import WineListSerializer, WineSerializer, GrapeListSerializer, GrapeSerializer, \
                         ProducerSerializer, WineCreateSerializer


# implementacao de ordenacao, de pesquisa por nome e por filtros na api dos vinhos
class WineViewSet(ModelViewSet):
    queryset = Wine.objects.all()
    serializer_class = WineSerializer
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)

    filter_fields = (
        'type',
        'region'
    )
    search_fields = (
        '^name',
        '^producer__name',
        'grapes__name'
    )
    ordering_fields = (
        'name',
        'price',
        'alcool_lvl'
    )

    def get_serializer_class(self):
        if self.action == "list":
            return WineListSerializer
        elif self.action == "retrieve":
            return WineSerializer
        else:
            return WineCreateSerializer


# implementacao de pesquisa por nome na api das castas
class GrapeViewSet(ModelViewSet):
    queryset = Grape.objects.all()
    serializer_class = GrapeSerializer
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)

    search_fields = (
        'name',
    )

    def get_serializer_class(self):
        if self.action == "list":
            return GrapeListSerializer
        else:
            return GrapeSerializer


# implementacao de pesquisa por nome na api dos produtores
class ProducerViewSet(ModelViewSet):
    queryset = Producer.objects.all()
    serializer_class = ProducerSerializer
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)

    search_fields = (
        'name',
    )