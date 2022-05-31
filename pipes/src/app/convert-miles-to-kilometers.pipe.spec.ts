import { ConvertMilesToKilometersPipe } from './convert-miles-to-kilometers.pipe';

describe('ConvertMilesToKilometersPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertMilesToKilometersPipe();
    expect(pipe).toBeTruthy();
  });
});
