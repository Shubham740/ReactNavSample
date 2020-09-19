import React from 'react';
import {View, Text} from 'react-native';
import styles from './FirstScreenStyles'
const FirstScreen = () => {
  return (
    <View style={styles.parentView}>
      <Text>First</Text>
    </View>
  );
};

export default FirstScreen;
