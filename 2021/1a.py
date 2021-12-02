data = open('2021/data/1.txt', 'rt')

count = -1
prev = 0

for xString in data:
  x = int(xString)
  if x > prev:
    count += 1
  prev = x

print(count)
