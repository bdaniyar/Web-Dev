a = int(input())

b = list(map(int, input().split()))

cnt = 0
c = False
for i in range(1,a):
    if(b[i] > 0 and b[i-1] > 0 or b[i] < 0 and b[i-1] < 0):
        c = True
        break

if c == True:
    print("YES")
else:
    print("NO")

