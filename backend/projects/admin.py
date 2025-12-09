from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_completed')
    search_fields = ('title', 'description')
    list_filter = ('tags', 'date_completed')
