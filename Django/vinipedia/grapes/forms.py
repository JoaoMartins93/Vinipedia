from django import forms


# pesquisa por nome de casta
class SearchForm(forms.Form):
    query = forms.CharField(max_length=30, label='Search')
