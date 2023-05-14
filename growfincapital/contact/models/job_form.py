from django.db import models




class Job_Form(models.Model):
    Name = models.CharField(max_length=100)
    Phone = models.IntegerField(default=0)
    Email = models.CharField(max_length=100)
    Position_apply = models.CharField(max_length = 100)
    Resume = models.FileField()
    
    
    