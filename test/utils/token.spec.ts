// tslint:disable: no-trailing-whitespace
import jwt from 'jwt-simple';
import config from '../../src/config';
import * as utils from '../../src/utils/token';

describe('Token utils', () => {
  describe('#generateToken', () => {
    test('should generate token', () => {
      jest
        .spyOn(global.Date, 'now')
        .mockImplementationOnce(() =>
          new Date('2019-05-14T11:01:58.135Z').valueOf(),
        );

      const email = 'test@domain.fr';
      const token = utils.generateToken(email);
      const decoded = jwt.decode(token, config.secret);

      expect(decoded).toBeInstanceOf(Object);
      expect(decoded.email).toBe(email);
      expect(decoded.created).toBe(1557831718135);
    });
  });
});
