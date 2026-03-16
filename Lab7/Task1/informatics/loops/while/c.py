a = int(input())

i = 0

while i<=a:
    if(2**i > a):
        break
    else:
        print(2**i, end=" ")
        i+=1