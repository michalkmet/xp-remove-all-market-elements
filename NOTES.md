# Notes

Define a method/function that removes from a given array of integers all the values
 contained in a second array.

* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

- test 1 - should return empty array for empty array 1
- test 2 - should return original array if second is empty
- test 3 - should return [2] for [1,2][1]
- test 4 - should return [1,2] for [1,2][4]
- test 5 - should return [1,1,2] for [1,3,1,2,3,4,3][3,4]
