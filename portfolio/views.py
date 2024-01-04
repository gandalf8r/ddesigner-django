from django.shortcuts import render, get_object_or_404
from django.views import View
from django.views.generic import TemplateView, ListView, DetailView

from .models import Web, Graphic, Mail, Cv

cats_db = [
    {'id': 1, 'name': 'WEB', 'data_tab': '#tab_1'},
    {'id': 2, 'name': 'GRAPHIC', 'data_tab': '#tab_2'},
]


class PortfolioHome(TemplateView):
    template_name = 'portfolio/index.html'
    extra_context = {
        'title': 'Home page',
        'web_projects': Web.objects.all().order_by("-id"),
        'graphic_projects': Graphic.objects.all().order_by("-id"),
        'add_cv': get_object_or_404(Cv),
    }
    

class WebView(ListView):
    template_name = 'portfolio/web-content.html'
    context_object_name = 'web_projects'
    paginate_by = 4
    model = Web

    extra_context = {
        'title': 'Portfolio',
    }

    def get_queryset(self):
        return Web.objects.all().order_by("-id")
    

class GraphicView(ListView):
    template_name = 'portfolio/graphic-content.html'
    context_object_name = 'graphic_projects'
    paginate_by = 4
    model = Graphic

    extra_context = {
        'title': 'Portfolio',
    }

    def get_queryset(self):
        return Graphic.objects.all().order_by("-id")


class ShowWebProject(DetailView):
    model = Web
    template_name = 'portfolio/project.html'
    slug_url_kwarg = 'web_project_slug'
    context_object_name = 'project'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["title"] = context['project'].title
        return context
    

class ShowGraphicProject(DetailView):
    model = Graphic
    template_name = 'portfolio/project.html'
    slug_url_kwarg = 'graphic_project_slug'
    context_object_name = 'project'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["title"] = context['project'].title
        return context


class SendMessage(View):
    def post(self, request):
        name = request.POST['name']
        email = request.POST['email']
        subject = request.POST['subject']
        message = request.POST['message']
        element = Mail(name=name, email=email, subject=subject, message=message)
        element.save()
        return render(request, 'portfolio/thanks.html', {'name': name, 'title': 'Thanks'})



def page_not_found(request, exception):
    data = {
        'title': '404',
    }

    return render(request, 'portfolio/404.html', data)
