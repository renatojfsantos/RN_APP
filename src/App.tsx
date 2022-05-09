import React, {useState, useEffect, useCallback} from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';

import {Header} from './components/Header';

const App = () => {
  const [name, setName] = useState<string>('Bolinha');
  const [title, setTitle] = useState<string>('Olá');

  /**
   * Effect
   */
  useEffect(() => {
    if (name === 'Bolinha') {
      setTitle('Hello');
    } else {
      setTitle('Olá');
    }
  }, [name, title]);

  /**
   * Callback
   */
  const handlePressButton = useCallback(() => {
    if (name === 'Bolinha') {
      setName('Renato');
    } else {
      setName('Bolinha');
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
