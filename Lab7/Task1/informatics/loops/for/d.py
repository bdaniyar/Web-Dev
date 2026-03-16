x = input()
d = input()

cnt = 0

for digit in x:
    if digit == d: 
        cnt += 1
 
# x = "123456789"
# d = "1"
# step 1: digit = "1", cnt = 0 + 1 = 1
# step 2: digit = "2", cnt = 1 + 0 = 1
# step 3: digit = "3", cnt = 1 + 0

# second method

for i in range(len(x)):
    if x[i] == d:
        cnt += 1
print(cnt)
