class Sorting:
    def bubble_sort(self, items):
        length = len(items)
        for i in range(length, 0, -1):
            no_swaps = True
            for j in range(i - 1):
                if items[j] > items[j + 1]:
                    items[j], items[j + 1] = items[j + 1], items[j]
                    no_swaps = False
            if no_swaps:
                break
        return items

    def second_largest_element(self, array):
        largest_element = max(array)
        element = -float('inf')
        for i in array:
            if element < i and i != largest_element:
                element = i
        return element
