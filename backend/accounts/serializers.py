from rest_framework import serializers

from .models import User 
from .utils import create_user_with_encryption_key

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'encrypted_key']

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'encrypted_key')
        extra_kwargs = {'password': {'write_only': True}, 'encrypted_key': {'read_only': True}}

    def create(self, validated_data):
        email = validated_data['email']
        password = validated_data['password']
        
        user = create_user_with_encryption_key(email, password)

        return user