from django.db import models

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    category = models.CharField(max_length=100, default='General')
    reading_time = models.IntegerField(help_text="Estimated reading time in minutes", default=5)

    def __str__(self):
        return self.title
