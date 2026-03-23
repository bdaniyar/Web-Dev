from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse
from .models import Product, Category

def products_list(request):
    products = Product.objects.all()
    data = list(products.values())
    return JsonResponse(data, safe=False)


def product_detail(request, id):
    product = Product.objects.get(id=id)
    return JsonResponse(product_to_dict(product))


def categories_list(request):
    categories = Category.objects.all()
    data = list(categories.values())
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    category = Category.objects.values("id", "name").get(id=id)
    return JsonResponse(category)


def category_products(request, id):
    products = Product.objects.filter(category_id=id)
    data = list(products.values())
    return JsonResponse(data, safe=False)


def product_to_dict(product):
    return {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category": product.category_id
    }