# Generated by Django 3.2.3 on 2021-06-17 06:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=60)),
                ('media', models.CharField(max_length=60)),
                ('content', models.CharField(max_length=1000)),
            ],
        ),
    ]
