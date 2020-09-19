import json

from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.http import HttpResponse, JsonResponse

# Create your views here.
def register(request):
	if request.method == 'POST':
		try:
			user_info = json.loads(request.body)

			username = user_info['username']
			password = user_info['password']
			email = user_info['email']
			firstName = user_info['first_name']
			lastName = user_info['last_name']

			user = User.objects.create(first_name=firstName, last_name=lastName, email=email, password=password, username=username)
		except Exception as e:
			data = {
				"message": str(e)
			}
		else:
			data = {
				"message": "true"
			}
	else:
		data = {
			"message": "false"
		}

	return JsonResponse(data)

def Login(request):
	if request.method == 'POST':
		login_info = json.loads(request.body)
		username = login_info['username']
		password = login_info['password']
		user = authenticate(username=username, password=password)
		if user is not None:
			return HttpResponse("success")
		else:
			return HttpResponse("Fail")