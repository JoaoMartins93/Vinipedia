import markdown
from django import template

from django.utils.safestring import mark_safe

from wines.forms import SearchForm, FilterForm

register = template.Library()


@register.filter(name="markdown")
def markdown_format(text):
    return mark_safe(markdown.markdown(text))


@register.inclusion_tag('vinipedia/searchWine_bar.html')
def search_bar():
    search_form = SearchForm()
    return {"search_form": search_form}


@register.inclusion_tag('vinipedia/searchWineRegion_bar.html')
def searchRegion_bar():
    search_form = SearchForm()
    return {"search_form": search_form}


@register.inclusion_tag('vinipedia/searchWineProducer_bar.html')
def searchProducer_bar():
    search_form = SearchForm()
    return {"search_form": search_form}


@register.inclusion_tag('vinipedia/searchWineGrapes_bar.html')
def searchGrapes_bar():
    search_form = SearchForm()
    return {"search_form": search_form}


@register.inclusion_tag('vinipedia/filterSearch.html')
def filterSearch():
    search_form = FilterForm()
    return {"search_form": search_form}
