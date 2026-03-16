a = int(input())

b = []

for i in range(a):
    x = int(input())
    b.append(x)

for i in range(len(b)):
    if(i % 2 ==0):
        print(b[i], end=" ")

