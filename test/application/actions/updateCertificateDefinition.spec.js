import { configureStore } from '../../../src/store';
import updateCertificateDefinition from '../../../src/actions/updateCertificateDefinition';
import { getCertificateDefinition, getVerifiedSteps } from '../../../src/selectors/certificate';
import { getErrorMessage } from '../../../src/selectors/error';
import certificateFixture from '../../fixtures/valid-certificate-example';
import notACertificateDefinition from '../../fixtures/not-a-certificate-definition';
import validCertificateSteps from '../../assertions/validCertificateSteps';
import initialVerifiedSteps from '../../assertions/initialVerifiedSteps';
import getInitialState from '../../../src/store/getInitialState';

describe('updateCertificateDefinition action creator test suite', function () {
  let store;

  beforeEach(function () {
    store = configureStore();
  });

  afterEach(function () {
    store = null;
  });

  describe('given it is dispatched with a certificate definition', function () {
    it('should set the certificate definition in the state', async function () {
      await store.dispatch(updateCertificateDefinition(certificateFixture));
      const state = store.getState();

      expect(getCertificateDefinition(state)).toBe(certificateFixture);
    });

    it('should set the error in the state to undefined', async function () {
      // initially trigger an error in the state
      await store.dispatch(updateCertificateDefinition(notACertificateDefinition));
      await store.dispatch(updateCertificateDefinition(certificateFixture));
      const state = store.getState();

      expect(getErrorMessage(state)).toBe(undefined);
    });

    describe('given the disableAutoVerify flag is false', function () {
      it('should automatically start the verification process', async function () {
        const apiConfiguration = {
          disableAutoVerify: false
        };
        const initialState = getInitialState(apiConfiguration);
        const store = configureStore(initialState);

        await store.dispatch(updateCertificateDefinition(certificateFixture));
        const state = store.getState();

        expect(getVerifiedSteps(state)).toEqual(validCertificateSteps);
      });
    });

    describe('given the disableAutoVerify flag is true', function () {
      it('should not automatically start the verification process', async function () {
        const apiConfiguration = {
          disableAutoVerify: true
        };
        const initialState = getInitialState(apiConfiguration);
        const store = configureStore(initialState);

        await store.dispatch(updateCertificateDefinition(certificateFixture));
        const state = store.getState();

        expect(getVerifiedSteps(state)).toEqual(initialVerifiedSteps);
      });
    })
  });

  describe('given it is dispatched with a non-valid certificate definition', function () {
    it('should not set the definition in the state', async function () {
      await store.dispatch(updateCertificateDefinition(notACertificateDefinition));
      const state = store.getState();

      expect(getCertificateDefinition(state)).toBe(null);
    });

    it('should set the error in the state', async function () {
      await store.dispatch(updateCertificateDefinition(notACertificateDefinition));
      const state = store.getState();

      expect(getErrorMessage(state)).toBe('Not a valid Blockcerts definition.');
    });
  });
});
