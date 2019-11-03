from django.urls import path
from .views import ListNotesView, ListTasksView, ListEventsView, notesView, eventsView, tasksView
#from rest_framework import routers


"""
router = routers.DefaultRouter()
router.register('tasks', TasksView, 'tasks')

urlpatterns = router.urls


"""
urlpatterns = [
    path('notes/', ListNotesView.as_view()),
    path('tasks/', ListTasksView.as_view()),
    path('events/', ListEventsView.as_view()),

    path('notes/<pk>', notesView.as_view()),
    path('tasks/<pk>', tasksView.as_view()),
    path('events/<pk>', eventsView.as_view()), 
    ]
