# Generated by Django 2.1.1 on 2018-10-08 12:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0038_auto_20181008_1518'),
        ('mentors', '0039_mentorquestionnaire_creation_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='MentorSocialServiceCenterData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('infomeeting_date', models.DateField(blank=True, null=True)),
                ('passport_copy', models.BooleanField(default=False)),
                ('application', models.BooleanField(default=False)),
                ('certificate_of_good_conduct', models.BooleanField(default=False)),
                ('medical_certificate', models.BooleanField(default=False)),
                ('psychologist_meeting_date', models.DateField(blank=True, null=True)),
                ('psychologist_summary', models.TextField(blank=True, null=True)),
                ('recommended_to_training', models.BooleanField(default=False)),
                ('training_date', models.DateField(blank=True, null=True)),
                ('trainer_summary', models.TextField(blank=True, null=True)),
                ('admitted_to_child', models.BooleanField(default=False)),
                ('contract_number', models.CharField(blank=True, max_length=32, null=True)),
                ('contract_date', models.DateField(blank=True, null=True)),
                ('comment', models.TextField(blank=True, null=True)),
                ('mentor', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='users.Mentor')),
            ],
        ),
    ]