# Generated by Django 2.1.1 on 2018-10-05 13:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0032_publicservice_social_service_center'),
    ]

    operations = [
        migrations.AddField(
            model_name='coordinator',
            name='public_service',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='users.PublicService'),
        ),
        migrations.AlterField(
            model_name='coordinator',
            name='social_service_center',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='users.SocialServiceCenter'),
        ),
    ]
