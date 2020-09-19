from django.db import models

# Create your models here.

def user_directory_path(instance, filename): 
	return 'media/user_{0}/{1}'.format(instance.username, filename)

class MoodAnalyseReport(models.Model):

	username = models.CharField(max_length=96)
	image = models.ImageField(upload_to = user_directory_path)

	def __str__(self):
		return self.username