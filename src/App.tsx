import React, {useState, useEffect} from 'react';
import {Alert, Button, SafeAreaView, StyleSheet} from 'react-native';

import {Header} from './components/Header';

const App = () => {
  const [name, setName] = useState<string>('Bolinha');
  const [title, setTitle] = useState<string>('Olá');

  /**
   * Effect
   */
  useEffect(() => {
    console.log('mounting');
    if (name === 'Bolinha') {
      setTitle('Hello');
    } else {
      setTitle('Olá');
    }

    return () => Alert.alert('Eita!', 'Component unmounting');
  }, [name, title]);

  /**
   * Callback para alterar o nome
   */
  const handlePressButton = () => {
    /**
     * Setando o nome de forma separada utilizando o hook useState
     */
    // if (name === 'Bolinha') {
    //   setName('Renato');
    // } else {
    //   setName('Bolinha');
    // }

    /**
     * Setando passando a função de callback diretamente no state
     */
    setName(old => {
      if (old === 'Bolinha') {
        return 'Renato';
      } else {
        return 'Bolinha';
      }
    });
  };

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
