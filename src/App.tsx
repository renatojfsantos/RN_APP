import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

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
    margin: 20,
  },
});

export default App;
