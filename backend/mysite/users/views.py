from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# Create your views here.
def register(request):
	if request.method == 'POST':
		user_info = json.loads(request.body)

		username = user_info['username']
		password = user_info['password']
		email = user_info['email']
		firstName = user_info['first_name']
		lastName = user_info['last_name']

		user = Users.objects.create(first_name=firstName, last_name=lastName,
			email=email, password=password, username=username)

		return HttpResponse("success")

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


