// tslint:disable: no-trailing-whitespace
import * as utils from '../../src/utils/text';

describe('Text utils', () => {
  describe('#justify', () => {
    test('should justify text', () => {
      const text = `    This is a text  justification  problem to fix    now `;
      const justified = `This   is   a   text
justification       
problem to fix now`;

      expect(utils.justify(text, 20)).toBe(justified);
    });
  });

  describe('#countWords', () => {
    test('should count words', () => {
      const text = `   Lorem Ipsum is     simply dummy text of the printing and typesetting industry. `;

      expect(utils.countWords(text)).toBe(12);
    });
  });
});
