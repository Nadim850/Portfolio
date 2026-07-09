import os
import django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "portfolio.settings")
django.setup()

from django.test import Client, override_settings
from django.contrib.auth.models import User

user, created = User.objects.get_or_create(username='testadmin', is_superuser=True, is_staff=True)
if created:
    user.set_password('admin')
    user.save()

client = Client()
client.force_login(user)

with override_settings(ALLOWED_HOSTS=['*']):
    try:
        response = client.get('/admin/core/blogpost/')
        print("STATUS:", response.status_code)
    except Exception as e:
        import traceback
        traceback.print_exc()
