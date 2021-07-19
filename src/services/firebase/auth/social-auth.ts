import auth from '@react-native-firebase/auth';
import {GOOGLE_SIGNIN_WEBCLIENTID} from '@env';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

export const handleGoogleSignIn = async () => {
  try {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const authenticated = await auth().signInWithCredential(googleCredential);
    return authenticated;
  } catch (error) {
    console.log(`\x1b[31mLOGIN ERROR WITH GOOGLE [${error}]`);
  }
};

export const handleFacebookSignIn = async () => {
  try {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    const authenticated = await auth().signInWithCredential(facebookCredential);
    return authenticated;
  } catch (error) {
    console.log(`\x1b[31mLOGIN ERROR WITH FACEBOOK [${error}]`);
  }
};


export const ConfigureGoogleSignIn = () =>
  GoogleSignin.configure({
    webClientId: '126074265055-ihmvas5ctanfejqcvd0jj3uihh7nu5c1.apps.googleusercontent.com',
    offlineAccess: true,
  });
