from django.shortcuts import render
from .models import Todo

# Create your views here.
def list_todos(request):
	todos = Todo.objects.all()