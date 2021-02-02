import curry from '.';

const mockFn = jest.fn();

const testCurry = (a, b, c, d, e, f) => {
  mockFn();
}

describe('curry', () => {
  it('should curry incoming fn', () => {
    const curried = curry(testCurry);

    curried(1);
    curried(2)(3)(4)(5)(6);
    expect(mockFn.mock.calls.length).toBe(0);

    const temp = curried(1);
    temp(2)(3)(4)(5)(6);

    expect(mockFn.mock.calls.length).toBe(1);

  })
})