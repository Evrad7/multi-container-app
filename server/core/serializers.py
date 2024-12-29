
from rest_framework import serializers
from .models import Fibo

class FiboSerialiazer(serializers.ModelSerializer):
    
    class Meta:
        model=Fibo
        fields=["index", "date_created"]
        read_only=["date_created"]

    