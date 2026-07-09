from django.contrib import admin
from .models import TechUpdate, BlogPost, Project, ContactMessage

@admin.register(TechUpdate)
class TechUpdateAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'date')
    list_filter = ('category', 'date')
    search_fields = ('title', 'description')

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'publish_date', 'is_published')
    list_filter = ('is_published', 'publish_date')
    search_fields = ('title', 'content')
    prepopulated_fields = {'slug': ('title',)}

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_created')
    search_fields = ('title', 'tech_stack')

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'sent_date', 'is_read')
    list_filter = ('is_read', 'sent_date')
    search_fields = ('name', 'email', 'message')
