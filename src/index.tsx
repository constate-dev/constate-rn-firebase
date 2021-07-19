import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import Routes from './routes';
import moment from 'moment';
import 'moment/min/locales';
import { useEffect } from 'react';
import { ConfigureGoogleSignIn } from './services/firebase/auth/social-auth';

const App = () => {
  moment.locale('pt-br');

  useEffect(() => {
    ConfigureGoogleSignIn()
  }, [])

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
