from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTokenView, Create, Test, NonAuthTest

urlpatterns = [
    path('user/create/', Create.as_view(), name='create_user'),
    path('token/obtain/', ObtainTokenView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('test/', Test.as_view(), name='test'),
    path('free/', NonAuthTest.as_view(), name='nonauth_test'),
    ]
