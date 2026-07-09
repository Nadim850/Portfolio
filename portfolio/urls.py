from django.contrib import admin
from django.urls import path
from core.views import (
    TechUpdateListView, 
    BlogPostListView, 
    BlogPostDetailView, 
    ProjectListView, 
    ContactMessageCreateView
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/tech-updates/', TechUpdateListView.as_view(), name='tech-updates-list'),
    path('api/blogs/', BlogPostListView.as_view(), name='blog-list'),
    path('api/blogs/<slug:slug>/', BlogPostDetailView.as_view(), name='blog-detail'),
    path('api/projects/', ProjectListView.as_view(), name='project-list'),
    path('api/contact/', ContactMessageCreateView.as_view(), name='contact-create'),
]
