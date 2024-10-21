from django.contrib import admin
from .models import User
# Register your models here.


class UserAdmin(admin.ModelAdmin):
    model = User


admin.site.register(User, UserAdmin)