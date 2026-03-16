import math

a = int(input())

i = 2
k = 0

while i<=a:
    if(i**k > a):
        print(k)
        break
    else:
        k+=1
