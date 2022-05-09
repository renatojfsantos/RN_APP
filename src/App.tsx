import React, {useState, useEffect, useCallback} from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';

import {Header} from './components/Header';

const App = () => {
  const [name, setName] = useState<string>('Stranger');
  const [title, setTitle] = useState<string>('Bem vindo!');

  /**
   * Effect
   */
  useEffect(() => {
    if (name === 'Stranger') {
      setTitle('Hello');
    } else {
      setTitle('Bem vindo!');
    }
  }, [name, title]);

  /**
   * Callback
   */
  const handlePressButton = useCallback(() => {
    if (name === 'Stranger') {
      setName('Renato');
    } else {
      setName('Stranger');
    }
  }, [name]);

  return (
    <SafeAreaView style={styles.Container}>
      <Header title={title} name={name} />
      <Button title="Change name" onPress={handlePressButton} />
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
