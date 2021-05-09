
import React from 'react';
import {
  AppNavigate
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
import io from 'socket.io-client'
import { LogBox } from 'react-native';

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();

enableScreens();
global.friendListSelected = [];
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRyYW5kdWN5IiwiaWF0IjoxNjEzNjE4NTE0LCJleHAiOjE2MTM2MjIxMTR9.hNm4T8zrKpKtAMYSz00I3HlNK8E6tfrDLX1BvZRUIPQ'
export default App = () =>{
  const socket = io.connect('ws://192.168.1.3:3600', {
    query: `token=${token}`
  });

  socket.on('connect', () => {
    console.warn("connected")
    
    socket.on('unauthorized', (msg) => {
      console.log(`unauthorized: ${JSON.stringify(msg.data)}`);
      throw new Error(msg.data.type);
    })
  })
  
  return (
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
        <SharedElementRenderer>
          <StyleProvider style = {getTheme(material)}>
            <AppNavigate />
          </StyleProvider>
        </SharedElementRenderer>
      </PersistGate>
    </Provider>
  )
}
