from rest_framework import serializers
from .models import TechUpdate, BlogPost, Project, ContactMessage

class TechUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechUpdate
        fields = '__all__'

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'
