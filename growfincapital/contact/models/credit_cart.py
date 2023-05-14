from django.db import models




class Credit_Cart(models.Model):
    Name = models.CharField(max_length = 100)
    Phone = models.IntegerField(default=0)
    Email = models.CharField(max_length=100)
    Pan_No = models.IntegerField(default = 0)
    Apply_for = models.CharField(max_length=200)
    
    def get_all_credit_information():
        return Credit_Cart.objects.all()
    
    