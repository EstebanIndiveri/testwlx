import React, { Fragment } from 'react';
import 'react-native-gesture-handler';
import ErrorBoundary from './components/ErrorBoundary';
import { Provider } from 'react-redux';
import MainNavigation from './navigate/MainNavigation';
import {persistore, store} from './stores';
import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens'
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigate/TabNavigator';
import AuthNavigation from './navigate/AuthNavigation';
enableScreens();

const App=() => {
  return (
    <Fragment>
      <ErrorBoundary>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistore}>
        <StatusBar backgroundColor="transparent" translucent barStyle="dark-content"/>
        <NavigationContainer>
          <AuthNavigation/>
        </NavigationContainer>
        </PersistGate>
        </Provider>
      </ErrorBoundary>
    </Fragment>
  );
};


export default App;
