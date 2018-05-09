from django.urls import path
from . import views

urlpatterns = [
	path('todos/', views.list_todos, name='list_todos')
]