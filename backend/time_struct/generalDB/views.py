from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework import viewsets, permissions
from .models import tasks, events, notes
from .serializers import tasksSerializer, eventsSerializer, notesSerializer

"""
class TasksView(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = tasksSerializer

    def get_queryset(self):
        return self.request.user.tasks.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class EventsView(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = eventsSerializer

    def get_queryset(self):
        return self.request.user.events.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    

class NotesView(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = notesSerializer

    def get_queryset(self):
        return self.request.user.notes.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)




"""
class ListTasksView(ListCreateAPIView):
    queryset = tasks.objects.all()
    serializer_class = tasksSerializer


class ListEventsView(ListCreateAPIView):
    queryset = events.objects.all()
    serializer_class = eventsSerializer


class ListNotesView(ListCreateAPIView):
    queryset = notes.objects.all()
    serializer_class = notesSerializer


class tasksView(RetrieveUpdateDestroyAPIView):
    queryset = tasks.objects.all()
    serializer_class = tasksSerializer


class eventsView(RetrieveUpdateDestroyAPIView):
    queryset = events.objects.all()
    serializer_class = eventsSerializer


class notesView(RetrieveUpdateDestroyAPIView):
    queryset = notes.objects.all()
    serializer_class = notesSerializer
