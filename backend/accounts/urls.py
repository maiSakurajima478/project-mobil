from django.urls import path, re_path
from .views import login, profile, register, logout_user

urlpatterns = [
    re_path('login', login),
    re_path('register', register),
    re_path('profile', profile),
    re_path('logout', logout_user)
]
