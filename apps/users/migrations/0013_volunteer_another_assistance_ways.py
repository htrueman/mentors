# Generated by Django 2.1.1 on 2018-12-04 14:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0012_volunteer_talk_about_profession'),
    ]

    operations = [
        migrations.AddField(
            model_name='volunteer',
            name='another_assistance_ways',
            field=models.BooleanField(default=True),
        ),
    ]
