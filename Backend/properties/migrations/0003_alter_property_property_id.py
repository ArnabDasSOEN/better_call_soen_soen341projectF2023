# Generated by Django 4.2.6 on 2023-10-26 19:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("properties", "0002_remove_property_id_property_property_id"),
    ]

    operations = [
        migrations.AlterField(
            model_name="property",
            name="property_id",
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
