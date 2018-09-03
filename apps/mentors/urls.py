from django.contrib.auth.decorators import login_required
from django.urls import path

from . import views

app_name = 'mentors'

urlpatterns = [
    path('register/', views.SignUpStep0View.as_view(), name='signup_step0'),
    path('register-step1/', views.SignUpStep1View.as_view(), name='signup_step1'),
    path('register-step2/', views.SignUpStep2View.as_view(), name='signup_step2'),
    path('register-step3/', views.SignUpStep3View.as_view(), name='signup_step3'),
    path('roadmap/', login_required(views.MentorRoadmap.as_view()), name='mentor_roadmap'),
    path('office/', login_required(views.MentorOfficeView.as_view()), name='mentor_office'),
    path('videos/', login_required(views.MentorSchoolVideoListView.as_view()), name='school_videos'),
    path('videos/<int:pk>/', login_required(views.MentorSchoolVideoDetailView.as_view()), name='school_video'),
    path('mentoree/', login_required(views.MentoreeDetailView.as_view()), name='mentoree_detail'),
]