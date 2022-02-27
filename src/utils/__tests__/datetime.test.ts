import { getLocaleDateString, getLocaleString } from '../datetime';

const validDatetime = '2022-2-25';
const invalidDatetime = 'hoge';

describe('utils/datetime', () => {
  describe('getLocaleDateString', () => {
    describe('if recieve valid datetime value', () => {
      it('return formatted localeDateString', () => {
        expect(getLocaleDateString(validDatetime)).toBe('2022/2/25');
      });
    });

    describe('if recieve invalid datetime value', () => {
      it('return undefined', () => {
        expect(getLocaleDateString(invalidDatetime)).toBe(undefined);
      });
    });
  });

  describe('getLocaleString', () => {
    describe('if recieve valid datetime value', () => {
      it('return formatted localeString', () => {
        expect(getLocaleString(validDatetime)).toBe('2022/2/25 0:00:00');
      });
    });

    describe('if recieve invalid datetime value', () => {
      it('return undefined', () => {
        expect(getLocaleString(invalidDatetime)).toBe(undefined);
      });
    });
  });
});
