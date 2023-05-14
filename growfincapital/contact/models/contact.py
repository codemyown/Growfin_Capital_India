from django.db import models



class Contact(models.Model):
    Name = models.CharField(max_length = 100)   
    Phone = models.IntegerField(default = 0)
    Email = models.CharField(max_length =100)
    Pan_Number = models.IntegerField(default = ' ')
    Pin_Code = models.IntegerField(default = ' ')
    Looking_for = models.CharField(max_length =100)
    Requirnment = models.TextField()
    