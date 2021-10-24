from django.contrib import admin
from base.models import Ticket

# Register your models here.

class TicketAdmin(admin.ModelAdmin):
    list_display =  ['titulo', 'user']
    search_fields = ['titulo']


admin.site.register(Ticket, TicketAdmin)
