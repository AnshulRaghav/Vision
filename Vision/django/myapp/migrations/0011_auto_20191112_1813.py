# Generated by Django 2.2.4 on 2019-11-12 12:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0010_auto_20191112_1746'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prediction',
            name='content_rating',
            field=models.CharField(max_length=50),
        ),
    ]
