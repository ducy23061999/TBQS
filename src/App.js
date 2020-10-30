
import React from 'react';
import {
  AuthNavigate,
  MainNavigate
} from './navigate';
import store, {persistor} from './store';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation'
import { PersistGate } from 'redux-persist/integration/react'
import {StyleProvider} from 'native-base'
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import {SharedElementRenderer} from 'react-native-motion'
import { enableScreens } from 'react-native-screens';


enableScreens();

export default App = () =>{
  return (
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
        <SharedElementRenderer>
          <StyleProvider style = {getTheme(material)}>
            <MainNavigate/>
          </StyleProvider>
        </SharedElementRenderer>
      </PersistGate>
    </Provider>
  )
}
