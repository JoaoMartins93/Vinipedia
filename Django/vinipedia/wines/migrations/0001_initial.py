# Generated by Django 3.1.7 on 2021-03-30 11:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('producers', '0001_initial'),
        ('grapes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Wine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('type', models.CharField(blank=True, choices=[('Tinto', 'Tinto'), ('Branco', 'Branco'), ('Rosé', 'Rosé'), ('Espumante', 'Espumante'), ('Licoroso', 'Licoroso')], max_length=10)),
                ('region', models.CharField(blank=True, choices=[('Vinhos Verdes', 'Vinhos Verdes'), ('Trás-Os-Montes', 'Trás-Os-Montes'), ('Douro', 'Douro'), ('Ribatejo', 'Ribatejo'), ('Bairrada', 'Bairrada'), ('DÃO', 'DÃO'), ('Beiras', 'Beiras'), ('Lisboa', 'Lisboa'), ('Terras do Sado', 'Terras do Sado'), ('Alentejo', 'Alentejo'), ('Madeira', 'Madeira')], max_length=20)),
                ('year', models.PositiveSmallIntegerField()),
                ('price', models.FloatField(blank=True)),
                ('alcool_lvl', models.FloatField(blank=True)),
                ('photo', models.ImageField(blank=True, upload_to='wines_img')),
                ('grapes', models.ManyToManyField(related_name='wine', to='grapes.Grape')),
                ('producer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='wine_producer', to='producers.producer')),
            ],
        ),
        migrations.CreateModel(
            name='Evaluation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField()),
                ('score', models.IntegerField(blank=True, choices=[(0, 0), (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9), (10, 10), (11, 11), (12, 12), (13, 13), (14, 14), (15, 15), (16, 16), (17, 17), (18, 18), (19, 19), (20, 20), (21, 21), (22, 22), (23, 23), (24, 24), (25, 25), (26, 26), (27, 27), (28, 28), (29, 29), (30, 30), (31, 31), (32, 32), (33, 33), (34, 34), (35, 35), (36, 36), (37, 37), (38, 38), (39, 39), (40, 40), (41, 41), (42, 42), (43, 43), (44, 44), (45, 45), (46, 46), (47, 47), (48, 48), (49, 49), (50, 50), (51, 51), (52, 52), (53, 53), (54, 54), (55, 55), (56, 56), (57, 57), (58, 58), (59, 59), (60, 60), (61, 61), (62, 62), (63, 63), (64, 64), (65, 65), (66, 66), (67, 67), (68, 68), (69, 69), (70, 70), (71, 71), (72, 72), (73, 73), (74, 74), (75, 75), (76, 76), (77, 77), (78, 78), (79, 79), (80, 80), (81, 81), (82, 82), (83, 83), (84, 84), (85, 85), (86, 86), (87, 87), (88, 88), (89, 89), (90, 90), (91, 91), (92, 92), (93, 93), (94, 94), (95, 95), (96, 96), (97, 97), (98, 98), (99, 99), (100, 100)])),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('active', models.BooleanField(default=True)),
                ('wine', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='evaluations', to='wines.wine')),
            ],
            options={
                'ordering': ('created',),
            },
        ),
    ]
