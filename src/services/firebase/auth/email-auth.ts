import auth from '@react-native-firebase/auth';
import {handleEmailSignUpTypes, handleForgotPasswordTypes} from '../types';

export const handleEmailSignUp = async ({
  email,
  password,
  setLoading,
  setError,
}: handleEmailSignUpTypes) => {
  setLoading(true);

  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('\x1b[32mLOGIN EFETUADO COM SUCESSO!');
      setError(0);
      setLoading(false);
    })
    .catch(({message}) => {
      console.log(`\x1b[31mNÃO FOI POSSÍVEL FAZER O REGISTRO [${message}]`);
      if ((message = userAlreadyExist)) {
        setError(409);
      } else {
        setError(500);
      }
      setLoading(false);
    });
};

export const handleEmailSignIn = async ({
  email,
  password,
  setLoading,
  setError,
}: handleEmailSignUpTypes) => {
  setLoading(true);

  await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('\x1b[32mLOGIN EFETUADO COM SUCESSO!');
      setError(0);
      setLoading(false);
    })
    .catch(({message}) => {
      console.log(`\x1b[31mNÃO FOI POSSÍVEL FAZER O LOGIN [${message}]`);
      if (message === userNotFound) {
        setError(404);
      } else if (message === incorrectPassword) {
        setError(409);
      } else {
        setError(500);
      }
      setLoading(false);
    });
};

export const handleForgotPassword = async ({
  email,
  setError,
  setLoading,
}: handleForgotPasswordTypes) => {
  setLoading(true);

  await auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      console.log('\x1b[32mEMAIL DE RECUPERAÇÃO ENVIADO COM SUCESSO!');
      setError(0);
      setLoading(false);
    })
    .catch(({message}) => {
      console.log(`\x1b[31mNÃO FOI ENVIAR O EMAIL DE RECUPERAÇÃO [${message}]`);
      if (message === userNotFound) {
        setError(404);
      } else if (message === incorrectPassword) {
        setError(409);
      } else {
        setError(500);
      }
      setLoading(false);
    });
};

const incorrectPassword =
  '[auth/wrong-password] The password is invalid or the user does not have a password.';

const userNotFound =
  '[auth/user-not-found] There is no user record corresponding to this identifier. The user may have been deleted.';

const userAlreadyExist =
  '[auth/email-already-in-use] The email address is already in use by another account.';
