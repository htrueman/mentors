# Generated by Django 2.1 on 2018-09-03 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0014_auto_20180830_1251'),
    ]

    operations = [
        migrations.AddField(
            model_name='mentor',
            name='profile_image',
            field=models.ImageField(default='temp', upload_to='mentors/profile_images'),
            preserve_default=False,
        ),
    ]