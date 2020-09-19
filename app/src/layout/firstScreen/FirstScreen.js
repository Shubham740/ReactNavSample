import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import styles from './FirstScreenStyles'
const FirstScreen = (props) => {

  useEffect(() => {
    // Update the document title using the browser API
   props.navigation.openDrawer()
  });
  return (
      
    <View style={styles.parentView}>
      <Text>First</Text>
    </View>
  );
};

export default FirstScreen;
