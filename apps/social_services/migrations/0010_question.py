# Generated by Django 2.1.1 on 2018-12-13 16:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0021_improvement'),
        ('social_services', '0009_auto_20181212_1905'),
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.TextField()),
                ('social_service_center', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.SocialServiceCenter')),
            ],
        ),
    ]