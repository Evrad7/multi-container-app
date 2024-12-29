from django.db import models
from django.core.validators import MaxValueValidator

# Create your models here.

class Fibo(models.Model):
    index=models.PositiveSmallIntegerField(verbose_name="index", validators=[MaxValueValidator(47)])
    date_created=models.DateTimeField(auto_now=True)
