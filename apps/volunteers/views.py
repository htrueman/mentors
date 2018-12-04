from django.urls import reverse_lazy
from django.views.generic import CreateView

from .forms import VolunteerForm


class VolunteerSignUpView(CreateView):
    template_name = 'users/volunteer_signup.html'
    form_class = VolunteerForm
    success_url = reverse_lazy('users:unregistered_guideline')
