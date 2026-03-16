a, b, c, d = map(int, input().split())

def func(a, b, c, d):
    return min(min(a, b), min(c, d))

print(func(a, b, c, d))