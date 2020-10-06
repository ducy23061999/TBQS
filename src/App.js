
import React from 'react';
import {
  AuthNavigate,
  MainNavigate
} from './navigate';
import store, {persistor} from './store';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation'
import { PersistGate } from 'redux-persist/integration/react'
 
export default App = () =>{
  return (
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigate />
      </PersistGate>
    </Provider>
  )
}
