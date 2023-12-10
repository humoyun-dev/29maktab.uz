from rest_framework import serializers
from .models import Blog
class BlogListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ("id", "title", "slug", "image")

class BlogDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = "__all__"