data = open('2021/data/2.txt', 'rt')

hor = 0
depth = 0

dataList = list(map(lambda x: x.split(' '), data.read().splitlines()))

for order in dataList:
  match order[0]:
    case 'forward':
      hor += int(order[1])
    case 'up':
      depth -= int(order[1])
    case 'down':
      depth += int(order[1])
print(hor*depth)
