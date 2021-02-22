from django.urls import path,include
from . import views
from django.conf import settings
from django.conf.urls.static import static
 
app_name='myapp'

urlpatterns = [
    path('',views.prediction.as_view(),name='home'),
    path('',include('myapp.api.urls','api')),
]

if settings.DEBUG:
	urlpatterns +=static(settings.STATIC_URL,document_root=settings.STATIC_ROOT)
	urlpatterns +=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
