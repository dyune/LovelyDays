from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import User


class ObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(ObtainPairSerializer, cls).get_token(user)
        token['username'] = user.username
        return token


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    email = serializers.EmailField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'email')
        # Defines fields that the serializer will be working with. In this case, User.
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)  # Remove password from dict for safety.
        instance = self.Meta.model(**validated_data)  # Extract data from fields and pass to constructor.
        if password is not None:
            instance.set_password(password)  # Later, add back the password.
        instance.save()  # Add to DB.
        return instance


class UserProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    email = serializers.EmailField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email')
