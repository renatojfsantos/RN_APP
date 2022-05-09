import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Header} from './components/Header';

const App = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
