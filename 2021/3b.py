import math
data = open('2021/data/3.txt', 'rt')

def find_most_common_bit(list, pos):
  count = 0
  for row in list:
    count += int(row[pos])
  return math.floor(count / len(list) * 2)

def find_least_common_bit(list, pos):
  count = 0
  for row in list:
    count += int(row[pos])
  return int(math.fabs(math.floor(count / len(list) * 2) - 1))

dataList = data.read().splitlines()

list1 = dataList.copy()
list2 = dataList.copy()
most_common_bit_1 = []
least_common_bit_2 = []

for i in range(12):
  most_common_bit_1.append(find_most_common_bit(list1, i))
  list1 = list(filter(lambda row: int([char for char in row][i]) == most_common_bit_1[i], list1))

for i in range(12):
  least_common_bit_2.append(find_least_common_bit(list2, i))
  list2 = list(filter(lambda row: int([char for char in row][i]) == least_common_bit_2[i], list2))
  if len(list2) == 1:
    break

print(int(list1[0], 2) * int(list2[0], 2))