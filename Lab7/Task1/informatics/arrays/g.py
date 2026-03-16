a = int(input())

arr = list(map(int, input().split()))

arr.reverse()

print(arr[::-1])

for i in range(len(arr)):
    print(arr[i], end=" ")

