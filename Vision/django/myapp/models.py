from django.db import models
from django.urls import reverse


# Create your models here.
#Parent class
class prediction(models.Model):
	category=models.CharField(max_length=100)
	price=models.CharField(max_length=6)
	content_rating=models.CharField(max_length=50)
	size=models.PositiveIntegerField()

	def get_absolute_url(self):
		return reverse('myapp:home')

	def __str__(self):
		return self.category + "->" + self.content_rating


	