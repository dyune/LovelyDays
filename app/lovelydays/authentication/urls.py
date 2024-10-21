from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTokenViewWithColor, Create, Test

urlpatterns = [
    path('user/create/', Create.as_view(), name='create_user'),
    path('token/generate/', ObtainTokenViewWithColor.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('test/', Test.as_view(), name='test'),
    ]
