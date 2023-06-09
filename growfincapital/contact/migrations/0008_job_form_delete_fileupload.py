# Generated by Django 4.1.3 on 2023-03-06 06:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("contact", "0007_fileupload_delete_job_form"),
    ]

    operations = [
        migrations.CreateModel(
            name="Job_Form",
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
                ("Name", models.CharField(max_length=100)),
                ("Phone", models.IntegerField(default=0)),
                ("Email", models.CharField(max_length=100)),
                ("Position_apply", models.CharField(max_length=100)),
                ("Resume", models.FileField(upload_to="")),
            ],
        ),
        migrations.DeleteModel(name="FileUpload",),
    ]
