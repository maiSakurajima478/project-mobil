from rest_framework import serializers

from .models import App

class AppSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=False, allow_blank=True)
    email = serializers.EmailField(required=False, allow_blank=True)
    class Meta:
        model = App
        fields = ('id', 'name', 'email', 'username', 'password', 'user_id')

class AppCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = App
        fields = ('id', 'name', 'email', 'username', 'password')
