# Generated by Django 2.1.1 on 2018-11-19 14:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_auto_20181118_2338'),
        ('social_services', '0004_auto_20181119_1447'),
    ]

    operations = [
        migrations.AddField(
            model_name='basesocialservicecenter',
            name='service',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='users.SocialServiceCenter'),
        ),
    ]