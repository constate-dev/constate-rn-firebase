import auth from '@react-native-firebase/auth';

export const GetCurrentUser = () => auth().currentUser;

export const handleSignOut = () => auth().signOut();

export const GetHighPhotoUrl = (photoURL: string) => {

  const providerId = GetCurrentUser()?.providerData[0]?.providerId;
  if (!providerId) {
    return '';
  }

  let result = photoURL;
  if (providerId?.includes('google')) {
    result = photoURL.replace('s96-c', 's400-c');
  } else if (providerId?.includes('facebook')) {
    result = `${photoURL}?type=large`;
  }
  return result;
};


