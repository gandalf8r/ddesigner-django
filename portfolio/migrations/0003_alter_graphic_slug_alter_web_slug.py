# Generated by Django 4.2.1 on 2023-11-03 09:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_graphic_slug_web_slug_alter_graphic_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='graphic',
            name='slug',
            field=models.SlugField(max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='web',
            name='slug',
            field=models.SlugField(max_length=255, unique=True),
        ),
    ]