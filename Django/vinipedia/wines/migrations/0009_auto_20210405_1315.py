# Generated by Django 3.1.7 on 2021-04-05 12:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wines', '0008_auto_20210405_1301'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wine',
            name='region',
            field=models.CharField(blank=True, choices=[('Vinhos Verdes', 'Vinhos Verdes'), ('Trás-Os-Montes', 'Trás-Os-Montes'), ('Douro', 'Douro'), ('Tejo', 'Tejo'), ('Bairrada', 'Bairrada'), ('Dão', 'Dão'), ('Beiras', 'Beiras'), ('Lisboa', 'Lisboa'), ('Terras do Sado', 'Terras do Sado'), ('Alentejo', 'Alentejo'), ('Madeira', 'Madeira')], max_length=20),
        ),
    ]