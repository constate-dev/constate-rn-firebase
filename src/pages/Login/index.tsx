import React from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {
  handleFacebookSignIn,
  handleGoogleSignIn,
} from '../../services/firebase/auth/social-auth';
import {AppStore} from '../../store/types';
import styles from './styles';
import { useEffect } from 'react';

const Login: React.FC = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {
    theme: {theme},
  } = useSelector((state: AppStore) => state);

  const handleWithoutLogin = () => {
    navigation.navigate('Main');
  };

  const handleGoogle = () => {
    handleGoogleSignIn().then(() => navigation.navigate('Main'))
  }

  const handleFacebook = () => {
    handleFacebookSignIn().then(() => navigation.navigate('Main'))
  }

  return (
    <SafeAreaView style={[styles.SafeContainer, {backgroundColor: theme.bg}]}>
      <View style={styles.Container}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleGoogle}>
          <Text style={styles.loginButtonText}>
            {t('CONTINUE WITH GOOGLE')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleFacebook}>
          <Text style={styles.loginButtonText}>
            {t('CONTINUE WITH FACEBOOK')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.loginButton, {backgroundColor: 'transparent'}]}
          onPress={handleWithoutLogin}>
          <Text style={[styles.loginButtonText, {color: theme.primary}]}>
            {t('CONTINUE WITHOUT LOGIN')}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
