from django.core.validators import RegexValidator
from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=50)
    phone = models.CharField(max_length=15, validators=[RegexValidator(regex=r'^\+?1?\d{9,15}$',)])
    image = models.ImageField(upload_to='images/')


    def __str__(self):
        return self.username