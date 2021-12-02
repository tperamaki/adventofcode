data = open('2021/data/1.txt', 'rt')

count = -1
prev = 0

dataList = list(map(lambda x: int(x), data.read().splitlines()))

for index, number in enumerate(dataList):
  if index < 1 or index >= len(dataList) - 1:
    continue
  sum = dataList[index - 1] + number + dataList[index + 1]
  if sum > prev:
    count += 1
  prev = sum

print(count)
