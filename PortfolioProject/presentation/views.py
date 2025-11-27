from tempfile import template

from django.http import HttpResponse
from django.shortcuts import render
from django.template.loader import get_template
from django.template import loader


# Create your views here.
def home(request):
    template = loader.get_template("presentation/accueil.html")
    return HttpResponse(template.render({}, request))
