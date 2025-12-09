from django.contrib import admin
from .models import BlogPost

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'date_posted')
    search_fields = ('title', 'content')
    list_filter = ('category', 'date_posted')
