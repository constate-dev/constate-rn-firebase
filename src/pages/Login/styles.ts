import {StyleSheet} from 'react-native';
import theme from '../../themes';

const styles = StyleSheet.create({
  SafeContainer: {
    backgroundColor: theme[0].bg,
    flex: 1,
  },
  Container: {
    backgroundColor: theme[0].bg,
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    paddingVertical: 48
  },
  loginButton: {
    width: '100%',
    height: 56,
    backgroundColor: theme[0].primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
    borderRadius: 2
  },
  loginButtonText: {
    color: theme[0].bg,
    fontFamily: 'Product Sans Bold',
  }
  
});

export default styles;
