import { MyGamesPipe } from './my-games.pipe';

describe('MyGamesPipe', () => {
  it('create an instance', () => {
    const pipe = new MyGamesPipe();
    expect(pipe).toBeTruthy();
  });
});
