from django.db import models


class Todo(models.Model):
    name = models.CharField(max_length=100)
    body = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name
