from django.db import models
from django.utils import timezone

class TechUpdate(models.Model):
    CATEGORY_CHOICES = [
        ('salesforce', 'Salesforce'),
        ('python', 'Python'),
        ('django', 'Django'),
        ('react', 'React'),
        ('other', 'Other'),
    ]
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='salesforce')
    date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-date']

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, max_length=200)
    content = models.TextField()
    publish_date = models.DateTimeField(default=timezone.now)
    is_published = models.BooleanField(default=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-publish_date']

class UserProfile(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=200)
    bio = models.TextField()
    resume_url = models.URLField(blank=True, null=True)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)
    linkedin_url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    trailhead_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name

class Experience(models.Model):
    role = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    date_range = models.CharField(max_length=100, help_text="e.g., Feb 2026 - Present")
    location = models.CharField(max_length=200)
    description = models.TextField()
    order = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.role} at {self.company}"

    class Meta:
        ordering = ['order']

class SkillCategory(models.Model):
    title = models.CharField(max_length=100)
    icon_name = models.CharField(max_length=50, help_text="Lucide icon name, e.g., Cloud, Code, Wrench")
    color = models.CharField(max_length=50, help_text="Tailwind color prefix, e.g., blue, indigo, cyan")
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['order']

class Skill(models.Model):
    category = models.ForeignKey(SkillCategory, related_name='skills', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['order']


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image_url = models.URLField(blank=True, null=True, help_text="Link to hosted image or placeholder")
    github_link = models.URLField(blank=True, null=True)
    live_link = models.URLField(blank=True, null=True)
    tech_stack = models.CharField(max_length=200, help_text="Comma separated, e.g., Apex, LWC, React")
    date_created = models.DateField(default=timezone.now)

    def __str__(self):
        return self.title
        
    class Meta:
        ordering = ['-date_created']

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    sent_date = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"Message from {self.name}"

    class Meta:
        ordering = ['-sent_date']
