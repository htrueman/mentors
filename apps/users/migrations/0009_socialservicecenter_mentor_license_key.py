# Generated by Django 2.1 on 2018-08-29 14:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mentors', '0001_initial'),
        ('users', '0008_auto_20180829_1303'),
    ]

    operations = [
        migrations.AddField(
            model_name='socialservicecenter',
            name='mentor_license_key',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='mentors.MentorLicenceKey'),
        ),
    ]