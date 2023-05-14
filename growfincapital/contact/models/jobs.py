from django.db import models





class Jobs(models.Model):
    Job_Title = models.CharField(max_length = 100)
    Education_Requriement = models.CharField(max_length = 200)
    Experience_Requriement = models.IntegerField(default = 0)
    Job_Location = models.CharField(max_length =100)
    Job_summary = models.CharField(max_length = 100)
    Details = models.TextField(default = ' ')
    Principal_Responsibilities = models.TextField(default = ' ')
    
    
    def get_jobs():
        return Jobs.objects.all()
    
    
    
    