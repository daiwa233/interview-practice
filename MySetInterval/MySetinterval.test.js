import { expect, it } from '@jest/globals';
import MySetInterval from './MySetInterval'

describe('MySetInterval', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  })

  it('should schedules a 5-second timer after 3-second', () => {
    const callback = jest.fn();
    MySetInterval(callback, 1000, 2000);


    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);

    jest.runOnlyPendingTimers();

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 3000);
    
    jest.runOnlyPendingTimers();

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 5000);
    
  })

  it('should stop timer', () => {
    const callback = jest.fn();
    const clearMyInterval = MySetInterval(callback, 1000, 2000);

    clearMyInterval();

    jest.runOnlyPendingTimers();

    expect(callback).not.toBeCalled();
    
  })
})