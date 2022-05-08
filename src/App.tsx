import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Header} from './components/Header';

const App = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Header name="Renato" title="Olá, seja bem-vindo!" />
      <Header name="Visitante" title="Bem-vindo!" />
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
