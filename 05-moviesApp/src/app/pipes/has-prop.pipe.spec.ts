import { HasPropPipe } from './has-prop.pipe';

describe('HasPropPipe', () => {
  it('create an instance', () => {
    const pipe = new HasPropPipe();
    expect(pipe).toBeTruthy();
  });
});
