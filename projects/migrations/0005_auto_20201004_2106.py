# Generated by Django 3.0.7 on 2020-10-04 13:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_remove_project_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='title',
            field=models.CharField(db_index=True, max_length=120),
        ),
    ]