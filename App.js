import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';

import firebase from 'react-native-firebase';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig)

export default function App() {

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
