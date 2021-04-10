from rest_framework import serializers

from wines.models import Wine
from grapes.models import Grape, AromaPictures
from producers.models import Producer, ProducerPicture


class ProducerWineSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Producer
        fields = ['url', 'name']


class WineListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Wine
        fields = ['url', 'pk', 'name', 'photo', 'year', 'type', 'region', 'price']


class AromaPicturesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AromaPictures
        fields = ['pathname',]


class GrapeListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Grape
        fields = ['url', 'pk', 'name', 'photo']


class GrapeSerializer(serializers.HyperlinkedModelSerializer):
    aromapictures = AromaPicturesSerializer(many=True)

    class Meta:
        model = Grape
        fields = ['url', 'pk', 'name', 'photo', 'aromapictures', 'description']


class WineSerializer(serializers.HyperlinkedModelSerializer):
    grapes = GrapeListSerializer(many=True)
    producer = ProducerWineSerializer()

    class Meta:
        model = Wine
        fields = ['url', 'pk', 'name', 'photo', 'year', 'producer', 'grapes', 'type', 'region', 'price', 'alcool_lvl',
                  'description']


class WineCreateSerializer(serializers.HyperlinkedModelSerializer):
    grapes = serializers.SlugRelatedField(queryset=Grape.objects.all(),
                                          many=True,
                                          slug_field='name')

    class Meta:
        model = Wine
        fields = ['url', 'pk', 'name', 'year', 'producer', 'grapes', 'type', 'region', 'price', 'alcool_lvl',
                  'description']


class ProducerPicturesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProducerPicture
        fields = ['pathname',]


class ProducerSerializer(serializers.HyperlinkedModelSerializer):
    producerpictures = ProducerPicturesSerializer(many=True)

    class Meta:
        model = Producer
        fields = ['url', 'pk', 'name', 'address', 'website', 'description', 'producerpictures']
