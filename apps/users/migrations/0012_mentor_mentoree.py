# Generated by Django 2.1 on 2018-08-30 10:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mentors', '0002_meeting_meetingimage_mentoree_storyimage'),
        ('users', '0011_auto_20180830_1034'),
    ]

    operations = [
        migrations.AddField(
            model_name='mentor',
            name='mentoree',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='mentors.Mentoree'),
        ),
    ]