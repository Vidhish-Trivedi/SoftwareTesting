class Searching:
    def binary_search(self, arr, x, low=0, high=None):
        if high is None:
            high = len(arr) - 1

        while high >= low:
            mid = (low + high) // 2

            if arr[mid] == x:
                return mid

            if x < arr[mid]:
                high = mid - 1
            else:
                low = mid + 1

        return -1

    def linear_search(self, the_array, key):
        for n in range(len(the_array)):
            if the_array[n] == key:
                return n
        return -1
