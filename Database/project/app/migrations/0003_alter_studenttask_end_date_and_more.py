# Generated by Django 5.0.2 on 2024-02-17 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_adminlogin_studentlogin_studenttask'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studenttask',
            name='end_date',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='studenttask',
            name='start_date',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='studenttask',
            name='submit_date',
            field=models.CharField(max_length=100),
        ),
    ]