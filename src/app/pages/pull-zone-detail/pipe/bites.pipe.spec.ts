import { BytesPipe } from './bytes.pipe';

describe('BytesPipe', () => {
  let pipe: BytesPipe;

  beforeEach(() => {
    pipe = new BytesPipe();
  });

  it('should format number to Kilobyte', () => {
    // given
    const input = 98000;

    // when
    const output = pipe.transform(input);

    // then
    expect(output).toEqual('95.70 KB');
  });

  it('should format number to Megabyte', () => {
    // given
    const input = 770041824;

    // when
    const output = pipe.transform(input);

    // then
    expect(output).toEqual('734.37 MB');
  });

  it('should format number to Gigabyte', () => {
    // given
    const input = 770041824000;

    // when
    const output = pipe.transform(input);

    // then
    expect(output).toEqual('717.16 GB');
  });


});
