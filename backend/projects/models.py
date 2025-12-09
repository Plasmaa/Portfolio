from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='project_images/')
    link = models.URLField(blank=True, null=True)
    tags = models.CharField(max_length=200, help_text="Comma-separated tags")
    date_completed = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.title
