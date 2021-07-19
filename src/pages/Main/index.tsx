import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {AppStore} from '../../store/types';
import styles from './styles';
import {
  GetCurrentUser,
  handleSignOut,
} from '../../services/firebase/auth/auth-methods';

const Main: React.FC = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {
    technologies: {data: technologies},
    theme: {theme},
  } = useSelector((state: AppStore) => state);

  const handleLogin = () => {
    if (GetCurrentUser()) {
      handleSignOut().then(() => navigation.navigate('Login'));
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={[styles.SafeContainer, {backgroundColor: theme.bg}]}>
      <ScrollView
        style={styles.ScrollView}
        contentContainerStyle={{padding: 0}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.Container}>
          <View style={styles.SupContainer}>
            <View style={styles.Header}>
              <View style={styles.TitleArea}>
                <Image
                  style={styles.TitleImg}
                  source={require('../../assets/img/constate.png')}
                  resizeMode={'cover'}
                />
                <Text style={styles.Title}>{t('hi dev')}!</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} onPress={handleLogin}>
                {GetCurrentUser()?.photoURL ? (
                  <Image
                    style={styles.PhotoContainer}
                    source={{
                      uri:
                        GetCurrentUser()?.photoURL ||
                        'https://image.flaticon.com/icons/png/512/152/152533.png',
                    }}
                    resizeMode={'cover'}
                  />
                ) : (
                  <Text style={styles.Title}>{t('Sign In')}</Text>
                )}
              </TouchableOpacity>
            </View>
            <RectButton rippleColor={'#262626'} style={styles.MiddleContainer}>
              <Text style={styles.MiddleTitle}>{t('theTemplate')}</Text>
              <Text style={styles.MiddleDescription}>
                {t('middleDescription')}
              </Text>
              <Text style={styles.MiddleDescription}>
                {t('middleInitial2')}
                <Text style={styles.ConstateText}>Constate</Text>
                {t('middleDescription2')}
              </Text>
            </RectButton>
            <View style={styles.TitleArea}>
              <Text style={styles.Title}>{t('technologies')}</Text>
            </View>
          </View>
          <View style={styles.CardArea}>
            <ScrollView
              style={styles.ScrollVertical}
              contentContainerStyle={{paddingHorizontal: 16}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {technologies.map((tec: any, index: number) => (
                <RectButton
                  style={styles.CardContainer}
                  key={index}
                  rippleColor={'#e1e1e1'}>
                  <Image
                    style={styles.CardImg}
                    source={tec.logo}
                    resizeMode={'cover'}
                  />
                  <Text style={styles.CardTitle}>{tec.title}</Text>
                  <View style={styles.CardTitleArea}></View>
                  <Text style={styles.CardDescription}>
                    {t(tec.description)}
                  </Text>
                </RectButton>
              ))}
            </ScrollView>
            <Text style={styles.FooterText}>CONSTATE</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
