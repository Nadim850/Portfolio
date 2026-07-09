from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import TechUpdate, BlogPost, Project, ContactMessage, UserProfile, Experience, SkillCategory
from .serializers import TechUpdateSerializer, BlogPostSerializer, ProjectSerializer, ContactMessageSerializer, UserProfileSerializer, ExperienceSerializer, SkillCategorySerializer

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

class UserProfileView(APIView):
    def get(self, request):
        profile = UserProfile.objects.first()
        if profile:
            serializer = UserProfileSerializer(profile)
            return Response(serializer.data)
        return Response({})

class ExperienceListView(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class SkillCategoryListView(generics.ListAPIView):
    queryset = SkillCategory.objects.all()
    serializer_class = SkillCategorySerializer

