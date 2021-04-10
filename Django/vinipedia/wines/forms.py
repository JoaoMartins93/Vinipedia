from django_filters import FilterSet
from django import forms
from .models import Evaluation, Wine


# formulario para os comentarios nos vinhos
class EvaluationForm(forms.ModelForm):

    class Meta:
        model = Evaluation
        fields = ('score', 'description')


# formulario para pesquisar por nome
class SearchForm(forms.Form):
    query = forms.CharField(max_length=30, label='Search')


# formulario para filtrar informacao por tipo e regiao
class FilterForm(forms.ModelForm):

    tipo = forms.CharField(widget=forms.RadioSelect(choices=Wine.WINE_CHOICES), required=False)
    região = forms.CharField(widget=forms.RadioSelect(choices=Wine.REGION_CHOICES), required=False)

    class Meta:
        model = Wine
        fields = ['tipo', 'região']
