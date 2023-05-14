from django.contrib import admin
from .models.contact import Contact
from .models.jobs import Jobs
from .models.job_form import Job_Form
from .models.reviews import Reviews
from .models.credit_cart import Credit_Cart



# Register your models here.

class AdminCredit(admin.ModelAdmin):
    list_display = ['Name','Email','Pan_No']
class AdminReviews(admin.ModelAdmin):
    list_display  = ['Name','Place']

class JobAdmin(admin.ModelAdmin):
    list_display = ['Name','Email']

class AdminContact(admin.ModelAdmin):
    list_display = ['Name','Email','Phone']
    
class AdminJobs(admin.ModelAdmin):
    list_display = ['Job_Title','Education_Requriement','Job_Location']

admin.site.register(Contact,AdminContact)
admin.site.register(Jobs,AdminJobs)
admin.site.register(Job_Form,JobAdmin)
admin.site.register(Reviews,AdminReviews)
admin.site.register(Credit_Cart,AdminCredit)