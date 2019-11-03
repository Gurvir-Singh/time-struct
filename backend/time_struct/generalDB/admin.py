from django.contrib import admin
from .models import tasks, events, notes

# Register your models here.

admin.site.register(tasks)
admin.site.register(events)
admin.site.register(notes)
