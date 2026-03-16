import math


a = int(input())

while a != 0:
    if int(math.sqrt(a)) == math.sqrt(a):
        print(a, end = " ")
    a -= 1


import math

a = int(input())

while a > 0:
    r = math.isqrt(a)
    if r * r == a:
        print(a, end=" ")
    a -= 1