from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import redis
import json
import os
from .serializers import FiboSerialiazer
from .models import Fibo
# Create your views here.

redis_client=redis.StrictRedis(host=os.environ["REDIS_HOST"], port=os.environ["REDIS_PORT"], charset="utf-8", decode_responses=True)

@api_view(["GET"])
def home_view(request):
    return Response("Welcome", status=status.HTTP_200_OK)


@api_view(["GET","POST"])
def fibonacci_view(request):

    if request.method =="POST":
        serializer=FiboSerialiazer(data=request.data)
        if serializer.is_valid():
            cleaned_data=serializer.validated_data
            redis_client.hset("values", cleaned_data["index"], "No yet inserted")
            redis_client.publish("insert", json.dumps(cleaned_data["index"]))
            serializer.save()
            return Response({"working":True}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    else:
        indexes=FiboSerialiazer(Fibo.objects.all(), many=True).data
        return Response(indexes, status=status.HTTP_200_OK)

@api_view(["GET"])
def fibonacci_cache_view(request):
    entries=redis_client.hgetall("values")
    return Response(entries, status=status.HTTP_200_OK)

    
