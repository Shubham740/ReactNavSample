import React from 'react';
import {View, StatusBar} from 'react-native';
import AppNavigation from './app/src/utils/AppNavigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'blue'} barStyle="dark-content" />
      <AppNavigation />
    </View>
  );
};
export default App;
