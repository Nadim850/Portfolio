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
