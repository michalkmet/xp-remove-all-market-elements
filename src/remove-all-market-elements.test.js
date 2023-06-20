const removeFromArray = require('./remove-all-market-elements');

describe('removeFromArray', () => {
  it('should return empty array for empty array 1', () => {
    expect(removeFromArray([],[1])).toEqual([]);
  });
  it('should return original array if second is empty', () => {
    expect(removeFromArray([1,2],[])).toEqual([1,2]);
  });
  it('should return [2] for [1,2][1]', () => {
    expect(removeFromArray([1,2],[1])).toEqual([2]);
  });
  it('should return [1,2] for [1,2][4]', () => {
    expect(removeFromArray([1,2,4],[1,2])).toEqual([4]);
  });
  it('should return [1,1,2] for [1,3,1,2,3,4,3][3,4]', () => {
    expect(removeFromArray([1,3,1,2,3,4,3],[3,4])).toEqual([1,1,2]);
  });
  it('should return [5, 6 ,7 ,8] for [1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8],[1, 3, 4, 2]', () => {
    expect(removeFromArray([1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8],[1, 3, 4, 2])).toEqual([5, 6 ,7 ,8]);
  });
});
