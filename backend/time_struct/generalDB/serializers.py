from rest_framework import serializers
from .models import tasks, events, notes

class tasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = tasks
        fields = '__all__'


class eventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = events
        fields = '__all__'


class notesSerializer(serializers.ModelSerializer):
    class Meta:
        model = notes
        fields = '__all__'




