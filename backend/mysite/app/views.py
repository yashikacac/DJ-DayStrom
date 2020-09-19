import json
import base64
from collections import Counter
from django.core.files.base import ContentFile

from .moodAnalyzer import Analyzer

from django.shortcuts import render, redirect
from .models import MoodAnalyseReport
from django.http import JsonResponse
import os
# Create your views here.

def processImage(request):
	if request.method == 'POST':
		data = json.loads(request.body)
		username = data['username']
		image = data['image']
		fmt, imgstr = image.split(';base64,') 
		ext = fmt.split('/')[-1] 
		DIR = 'media/user_' + username + '/'
		num = len([name for name in os.listdir(DIR) if os.path.isfile(os.path.join(DIR, name))])
		imgObj = ContentFile(base64.b64decode(imgstr), name=username + '-' + str(num) + "." + ext)
		MoodAnalyseReport.objects.create(username=username, image=imgObj)
		message = {
			"message": "Successful"
		}
	else:
		message = {
			"message": "Unsuccessful"
		}
	return JsonResponse(message)

def getMood(request):
	if request.method == 'POST':
		data = json.loads(request.body)
		username = data['username']
		reports = MoodAnalyseReport.objects.filter(username=username)
		tool = Analyzer()
		emotions = ["Anger", "Joy", "Surprise", "Sorrow"]
		emotionsDetected = []
		for i in reports:
			path = i.image.url[7:]
			faces = tool.analyze(path)
			confidence = (0, 1, 2, 3, 4, 5)
			for face in faces:
				emotionsList = [confidence[face.anger_likelihood], confidence[face.joy_likelihood], confidence[face.surprise_likelihood], confidence[face.sorrow_likelihood]]

			i.image.delete(save=True)
			i.delete()

			emotionsDetected.append(emotions.index(emotions[emotionsList.index(max(emotionsList))]))

		repAnalyze = Counter(emotionsDetected)

		emotionFrequency = 0
		emotion = ""
		for i in repAnalyze.keys():
			if repAnalyze[i] > emotionFrequency:
				emotionFrequency = repAnalyze[i]
				emotion = emotions[i]
		result = {
			"message": {
				"emotionDetected": emotion
			}
		}
		return JsonResponse(result)
	else:
		return JsonResponse(
			{
				"message": "Error"
			}
		)