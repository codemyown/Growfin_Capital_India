# Generated by Django 4.1.3 on 2023-03-06 06:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("contact", "0006_credit_cart"),
    ]

    operations = [
        migrations.CreateModel(
            name="FileUpload",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("file", models.FileField(upload_to="")),
            ],
        ),
        migrations.DeleteModel(name="Job_Form",),
    ]