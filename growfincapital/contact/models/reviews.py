from django.db import models




class Reviews(models.Model):
    Tell = models.TextField()
    Name = models.CharField(max_length=100)
    Profession = models.CharField(max_length=100)
    Age = models.IntegerField(default = 0)
    Place = models.CharField(max_length=100)
    
    
    def get_all_reviews():
        return Reviews.objects.all()
    
    