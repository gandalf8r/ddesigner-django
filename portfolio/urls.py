from django.urls import path
from . import views


urlpatterns = [
    path('', views.PortfolioHome.as_view(), name='home'),
    path('web_content/', views.WebView.as_view(), name='web_content'),
    path('graphic_content/', views.GraphicView.as_view(), name='graphic_content'),
    path('web_project/<slug:web_project_slug>/', views.ShowWebProject.as_view(), name='web_project'),
    path('graphic_project/<slug:graphic_project_slug>/', views.ShowGraphicProject.as_view(), name='graphic_project'),
    path('thanks/', views.SendMessage.as_view(), name='thanks'),
]
