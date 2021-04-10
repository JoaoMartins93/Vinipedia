import markdown
from django import template

from django.utils.safestring import mark_safe

from grapes.forms import SearchForm

register = template.Library()


@register.filter(name="markdown")
def markdown_format(text):
    return mark_safe(markdown.markdown(text))


@register.inclusion_tag('vinipedia/searchGrape_bar.html')
def search_bar():
    search_form = SearchForm()
    return {"search_form": search_form}
