from django.views import generic
from .models import prediction
from django.urls import reverse_lazy
from django.shortcuts import redirect,render
from django.contrib.auth import authenticate,login,logout
from .forms import UserForms,form_input
from django.shortcuts import render
from django.http import JsonResponse
from .models import prediction
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
import os,sys
import joblib
import numpy as np
import pandas as pd

class prediction(generic.CreateView):
	model=prediction
	fields=['category','price','content_rating','size']
	template_name = 'myapp/base.html'

	def post(self,request):
		category = request.POST['category']
		price = request.POST['price']
		content_rating = request.POST['content_rating']
		size = request.POST.get('size')

		if price == 'Paid':
			price_convert = 1
		elif price == 'Free':
			price_convert = 0
		
		category_dict = {'ART_AND_DESIGN': 0,'AUTO_AND_VEHICLES': 1,'BEAUTY': 2,
		'BOOKS_AND_REFERENCE': 3,'BUSINESS': 4,'COMICS': 5,'COMMUNICATION': 6,'DATING': 7,'EDUCATION': 8,'ENTERTAINMENT': 9,
		'EVENTS': 10,'FINANCE': 11,'FOOD_AND_DRINK': 12,'GAME_ACTION': 13,'GAME_ADVENTURE': 14,'GAME_ARCADE': 15,
		'GAME_BOARD': 16,'GAME_CARD': 17,'GAME_CASINO': 18,'GAME_CASUAL': 19,'GAME_EDUCATIONAL': 20,'GAME_MUSIC': 21,
		'GAME_PUZZLE': 22,'GAME_RACING': 23,'GAME_ROLE_PLAYING': 24,'GAME_SIMULATION': 25,'GAME_SPORTS': 26,
		'GAME_STRATEGY': 27,'GAME_TRIVIA': 28,'GAME_WORD': 29,'HEALTH_AND_FITNESS': 30,'HOUSE_AND_HOME': 31,
		'LIBRARIES_AND_DEMO': 32,'LIFESTYLE': 33,'MAPS_AND_NAVIGATION': 34,'MEDICAL': 35,'MUSIC_AND_AUDIO': 36,
		'NEWS_AND_MAGAZINES': 37,'PARENTING': 38,'PERSONALIZATION': 39,'PHOTOGRAPHY': 40,'PRODUCTIVITY': 41,
		'SHOPPING': 42,'SOCIAL': 43,'SPORTS': 44,'TOOLS': 45,'TRAVEL': 46,'TRAVEL_AND_LOCAL': 47,'VIDEO_PLAYERS': 48,'WEATHER': 49}

		content_rating_dict = {'Adults only 18+': 0,'Everyone': 1,'Everyone 10+': 2,'Mature 17+': 3,'Teen': 4,'Unrated': 5}

		my_path = os.path.abspath(os.path.dirname(__file__))
		path = os.path.join(my_path, "finalized.sav")
		loaded_model = joblib.load(open(path, 'rb'))
		cat = category_dict[category]
		cont = content_rating_dict[content_rating]
		X_test = pd.DataFrame({'Price':[price_convert],'category':cat,'Content_Rating':cont,'Size(Mb)':[size]})
		result = loaded_model.predict(X_test)
		result = str(result)
		result = result.split("['")
		result = result[1].split("']")
		result = result[0]

		return render(request, 'myapp/base.html', {'category': category,'price':price,'content_rating':content_rating,
			'size':size,'result':result})

