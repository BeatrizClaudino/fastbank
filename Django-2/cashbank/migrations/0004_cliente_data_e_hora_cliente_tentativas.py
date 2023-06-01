# Generated by Django 4.2.1 on 2023-06-01 18:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cashbank', '0003_alter_movimentacao_valor'),
    ]

    operations = [
        migrations.AddField(
            model_name='cliente',
            name='data_e_hora',
            field=models.CharField(default=1, max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='cliente',
            name='tentativas',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]