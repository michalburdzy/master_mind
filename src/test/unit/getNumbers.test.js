import getNumbers from '../../utils/getNumbers';
const nums = getNumbers();

it('returns array of three numbers', () => {
  expect(nums).toHaveLength(3);
});
it('returns three different numbers', () => {
  expect(nums[0]).not.toEqual(nums[1]);
  expect(nums[1]).not.toEqual(nums[2]);
});
it('returns values between 0 and 9', () => {
  for (let number of nums) {
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(9);
  }
});
