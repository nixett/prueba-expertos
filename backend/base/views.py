from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from rest_framework import generics
from .models import Ticket
from .serializers import TicketSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        data['username'] = self.user.username
        data['email'] = self.user.email

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
#@permission_classes([IsAuthenticated])
def getTicket(request):
    tickets = Ticket.objects.all()
    serializer = TicketSerializer(tickets, many=True)
    return Response(serializer.data)



""" class TicketList(generics.ListCreateAPIView):
    queryset = Ticket.objects.all()
    serializer_ticket = TicketSerializer


class TicketList(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ticket.objects.all()
    serializer_ticket = TicketSerializer """


@api_view(['GET'])
def getRoutes(request):
    return Response('Hello')
