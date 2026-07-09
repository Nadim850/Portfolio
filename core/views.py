from rest_framework import generics
from .models import TechUpdate, BlogPost, Project, ContactMessage
from .serializers import TechUpdateSerializer, BlogPostSerializer, ProjectSerializer, ContactMessageSerializer

class TechUpdateListView(generics.ListAPIView):
    queryset = TechUpdate.objects.all()
    serializer_class = TechUpdateSerializer

class BlogPostListView(generics.ListAPIView):
    queryset = BlogPost.objects.filter(is_published=True)
    serializer_class = BlogPostSerializer

class BlogPostDetailView(generics.RetrieveAPIView):
    queryset = BlogPost.objects.filter(is_published=True)
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
