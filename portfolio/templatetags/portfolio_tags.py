from django import template
import portfolio.views as views


register = template.Library()


@register.simple_tag()
def get_categories():
    return views.cats_db
