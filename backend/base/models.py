from django.db import models
from django.contrib.auth.models import User

# Create your models here.

ESTADOS = (
    ('0', 'Abierto'),
    ('1', 'Pendiente'),
    ('2', 'En proceso'),
    ('3', 'Resuelto'),
    ('4', 'Cerrado'),
)

class Ticket(models.Model):
    idTicket = models.AutoField(primary_key=True)
    user =  models.ForeignKey(User, on_delete=models.SET_NULL,  null=True, blank=True)

    titulo = models.CharField('Titulo', max_length=200, null=False, blank=False)
    descripcion = models.TextField('Descripcion del ticket', max_length=500, null=False, blank=False)
    estado = models.CharField('Estado del ticket', max_length=1, choices=ESTADOS)
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo
