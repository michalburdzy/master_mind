import checkPlayerBet from '../../utils/checkPlayerBet';

it('returns array of length 2', () => {
  expect(checkPlayerBet([1, 2, 3], [4, 5, 6])).toHaveLength(2);
});
it('returns values between 0 and three', () => {
  let res = checkPlayerBet([1, 2, 3], [3, 1, 2]);
  for (let number in res) {
    expect(Number(number)).toBeGreaterThanOrEqual(0);
    expect(Number(number)).toBeLessThanOrEqual(3);
  }
});
it('returns [3,3] for good bet', () => {
  expect(checkPlayerBet([1, 2, 3], [1, 2, 3])).toEqual([3, 3]);
});
it('returns [0,0] for bad bet', () => {
  expect(checkPlayerBet([1, 2, 3], [4, 5, 6])).toEqual([0, 0]);
});
it('returns [3,0] for good numbers on wrong positions', () => {
  expect(checkPlayerBet([1, 2, 3], [3, 1, 2])).toEqual([3, 0]);
});
it('returns [2,1] for two good numbers, but one on wrong position', () => {
  expect(checkPlayerBet([1, 2, 3], [1, 4, 2])).toEqual([2, 1]);
});
