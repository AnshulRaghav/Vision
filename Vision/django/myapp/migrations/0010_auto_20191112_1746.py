# Generated by Django 2.2.4 on 2019-11-12 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0009_auto_20190403_1357'),
    ]

    operations = [
        migrations.CreateModel(
            name='prediction',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=100)),
                ('price', models.CharField(max_length=2)),
                ('content_rating', models.CharField(max_length=2)),
                ('size', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='auth_data',
        ),
        migrations.DeleteModel(
            name='employee',
        ),
    ]
