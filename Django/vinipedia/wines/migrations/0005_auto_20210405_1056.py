# Generated by Django 3.1.7 on 2021-04-05 09:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wines', '0004_auto_20210403_1901'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wine',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='wines_img'),
        ),
    ]
