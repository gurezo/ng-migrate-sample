import { StringLenPipe } from './string-len.pipe';

describe('StringLenPipe', () => {
  it('create an instance', () => {
    const pipe = new StringLenPipe();
    expect(pipe).toBeTruthy();
  });
});
