from django.db import models
from django.contrib.auth.models import User


class tasks(models.Model):
    task = models.CharField(max_length=128)
    isTaskComplete = models.BooleanField(default=False)
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, verbose_name="user data")

    def __str__(self):
        return self.owner, self.task


class events(models.Model):
    eventName = models.CharField(max_length=64)
    eventDesc = models.CharField(max_length=512)
    eventDate = models.CharField(max_length=11)
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, verbose_name="user data")


    def __str__(self):
        return self.owner, self.eventName


class notes(models.Model):
    noteTitle = models.CharField(max_length=64)
    noteContent = models.CharField(max_length=10000)
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, verbose_name="user data")

    def __str__(self):
        return self.owner, self.noteTitle
