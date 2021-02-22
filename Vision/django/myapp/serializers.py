from rest_framework import serializers
from myapp.models import prediction

class PredictionSerializer(serializers.Serializer):
	category=serializers.CharField(max_length=30)
	price=serializers.CharField(max_length=6)
	content_rating=serializers.CharField(max_length=50)
	size=serializers.CharField()
	result = serializers.CharField(max_length=20)
