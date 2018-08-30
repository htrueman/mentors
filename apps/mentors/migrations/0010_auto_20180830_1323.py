# Generated by Django 2.1 on 2018-08-30 13:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mentors', '0009_meeting_performer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meeting',
            name='performer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='meetings', to='users.Mentor'),
        ),
    ]
