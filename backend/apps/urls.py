from django.urls import path

from .views import CreateAppView, AppListView, DescryptAppView


urlpatterns = [
    path('', CreateAppView.as_view(), name='create_app'),
    path('list/', AppListView.as_view(), name='apps'),
    path('<int:pk>/descrypt/', DescryptAppView.as_view(), name='descrypt')
]
