# Generated by Django 3.1.7 on 2021-04-07 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wines', '0009_auto_20210405_1315'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wine',
            name='name',
            field=models.CharField(max_length=80),
        ),
    ]
