from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path("",views.index),
    path("about/",views.about),
    path("carrer/",views.carrer),
    path("credit/",views.credit)
]
