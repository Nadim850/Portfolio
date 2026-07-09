from django.contrib import admin
from django.urls import path
from django.views.generic import RedirectView

admin.site.site_header = "Nadim's Portfolio Admin"
admin.site.site_title = "Portfolio Admin Portal"
admin.site.index_title = "Welcome to the Portfolio CMS"
from core.views import (
    TechUpdateListView, 
    BlogPostListView, 
    BlogPostDetailView, 
    ProjectListView, 
    ContactMessageCreateView,
    UserProfileView,
    ExperienceListView,
    SkillCategoryListView
)

urlpatterns = [
    path('', RedirectView.as_view(url='/admin/', permanent=False)),
    path('admin/', admin.site.urls),
    path('api/tech-updates/', TechUpdateListView.as_view(), name='techupdate-list'),
    path('api/blogs/', BlogPostListView.as_view(), name='blog-list'),
    path('api/blogs/<slug:slug>/', BlogPostDetailView.as_view(), name='blog-detail'),
    path('api/projects/', ProjectListView.as_view(), name='project-list'),
    path('api/contact/', ContactMessageCreateView.as_view(), name='contact-create'),
    path('api/profile/', UserProfileView.as_view(), name='profile-detail'),
    path('api/experience/', ExperienceListView.as_view(), name='experience-list'),
    path('api/skills/', SkillCategoryListView.as_view(), name='skill-list'),
]
