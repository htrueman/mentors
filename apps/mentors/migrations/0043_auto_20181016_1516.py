# Generated by Django 2.1.1 on 2018-10-16 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mentors', '0042_mentorquestionnaireeducation_institution'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mentorquestionnaire',
            name='actual_address',
        ),
        migrations.RemoveField(
            model_name='mentorquestionnaire',
            name='date_of_birth',
        ),
        migrations.RemoveField(
            model_name='mentorquestionnaire',
            name='email',
        ),
        migrations.RemoveField(
            model_name='mentorquestionnaire',
            name='full_name',
        ),
        migrations.RemoveField(
            model_name='mentorquestionnaire',
            name='phone_number',
        ),
        migrations.AddField(
            model_name='mentorquestionnaire',
            name='middle_name',
            field=models.CharField(default='name', max_length=32),
            preserve_default=False,
        ),
    ]