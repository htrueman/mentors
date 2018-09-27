# Generated by Django 2.1.1 on 2018-09-24 12:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0018_socialservicecenter_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Coordinator',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.RemoveField(
            model_name='mentor',
            name='social_service',
        ),
        migrations.AddField(
            model_name='coordinator',
            name='mentor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.Mentor'),
        ),
        migrations.AddField(
            model_name='coordinator',
            name='social_service_center',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.SocialServiceCenter'),
        ),
        migrations.AddField(
            model_name='mentor',
            name='social_service_center',
            field=models.ManyToManyField(through='users.Coordinator', to='users.SocialServiceCenter'),
        ),
    ]