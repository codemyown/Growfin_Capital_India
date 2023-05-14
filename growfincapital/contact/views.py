from django.shortcuts import render
from django.http import HttpResponse
from .models.contact import Contact
from .models.jobs import  Jobs
from .models.job_form import Job_Form
from .models.reviews import Reviews
from .models.credit_cart import Credit_Cart


# Create your views here.


review = Reviews.get_all_reviews()
def index(request):
    data = {
        'review':review
    }
    if request.method == "POST":
        name = request.POST['name']
        phone = request.POST['phone']
        email = request.POST['email']
        pan = request.POST['pan']
        pincode = request.POST['pincode']
        looking = request.POST['looking']
        message = request.POST['message']
        my_contact = Contact(Name = name,Phone = phone,Email = email,Pan_Number = pan,Pin_Code = pincode,Looking_for = looking,Requirnment = message)
        my_contact.save()
        
        
    return render(request,"index.html",data)


def about(request):
    return render(request,"about.html")


def carrer(request):
    career = Jobs.get_jobs()
    dicts = {
        'career':career
    }
    if request.method == "POST":
        name = request.POST['name']
        phone = request.POST['phone']
        email = request.POST['email']
        postition = request.POST['postition']
        files= request.FILES['file']
        document = Job_Form.objects.create(Resume = files)
        document.save()
        my_job = Job_Form(Name = name,Phone = phone,Email =email,Position_apply = postition,Resume = files)
        my_job.save()
        
        
        
    return render(request,"career.html",dicts)

def credit(request):
    if request.method == "POST":
        name = request.POST['name']
        phone = request.POST['phone']
        email = request.POST['email']
        pan = request.POST['pan']
        apply = request.FILES['apply']
        My_Credit = Credit_Cart(Name = name,Phone = phone,Email = email,Pan_No = pan,Apply_for = apply)
        My_Credit.save()
        
    return render(request,"credit_cart.html")