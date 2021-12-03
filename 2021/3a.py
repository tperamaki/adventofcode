import math
data = open('2021/data/3.txt', 'rt')

# 000101110010
bitCounts = []

for i in range(12):
  bitCounts.append(0)

dataList = data.read().splitlines()

for row in dataList:
  for index, value in enumerate([char for char in row]):
    bitCounts[index] += int(value)

bits = ""
bitsNegative = ""
for bit in bitCounts:
  bits += str(math.floor(bit/(len(dataList)/2)))
  bitsNegative += str(int(math.fabs(math.floor(bit/(len(dataList)/2)) - 1)))

print(int(bits, 2))
print(int(bitsNegative, 2))
print(int(bits, 2) * int(bitsNegative, 2))