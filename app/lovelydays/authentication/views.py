from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions, viewsets, status
from .serializer import ObtainPairSerializer, UserSerializer, UserProfileSerializer
from rest_framework.response import Response


# Create your views here.
class Test(APIView):   # TODO: Delete this before prod.

    @staticmethod
    def get(request):
        return Response(data="hi chat", status=status.HTTP_200_OK)


class NonAuthTest(APIView):
    permission_classes = (permissions.AllowAny,)
    
    @staticmethod
    def get(request):
        return Response(data="hi chat", status=status.HTTP_200_OK)


class ObtainTokenView(TokenObtainPairView):
    serializer_class = ObtainPairSerializer


class Create(APIView):
    permission_classes = [permissions.AllowAny]

    @staticmethod
    def get(self, request):
        return HttpResponse("Hello, world. You're at the polls view.")\


    @csrf_exempt
    def post(self, request, format='json'):
        serialized_user = UserSerializer(data=request.data)
        if serialized_user.is_valid():
            user = serialized_user.save()
            if user is not None:
                json_data = serialized_user.data
                return Response(json_data, status=status.HTTP_201_CREATED)
        else:
            return Response(serialized_user.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([permissions.AllowAny])  # TODO: NEED TO AUTHENTICATE
def get_profile(request):
    user = request.user
    print(f"Authenticated User: {user}")
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

