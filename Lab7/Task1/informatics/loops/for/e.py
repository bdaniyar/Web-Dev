a = input()

cnt = 0

for i in range(len(a)):
    cnt+=int(a[i])

for i in a:
    cnt+=int(i)

    
print(cnt)
