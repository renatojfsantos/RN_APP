import React, {useState, useEffect, useCallback, useMemo, useRef} from 'react';
import {Alert, Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';

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

    // return () => Alert.alert('Eita!', 'Component unmounting');
  }, [name, title]);

  /**
   * Callback para alterar o nome
   */
  // const handlePressButton = () => {
  //   /**
  //    * Setando o nome de forma separada utilizando o hook useState
  //    */
  //   // if (name === 'Bolinha') {
  //   //   setName('Renato');
  //   // } else {
  //   //   setName('Bolinha');
  //   // }

  //   /**
  //    * Setando passando a função de callback diretamente no state
  //    */
  //   setName(old => {
  //     if (old === 'Bolinha') {
  //       return 'Renato';
  //     } else {
  //       return 'Bolinha';
  //     }
  //   });
  // };

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

  /**
   * Memos
   */
  const nameChanged = useMemo(() => {
    // return value
    return `${name} | ${new Date()}`;
  }, [name]);

  /**
   * Refs
   */
  const inputRef = useRef<TextInput>({} as TextInput);

  return (
    <SafeAreaView style={styles.Container}>
      <Header title={title} name={nameChanged} />
      <Button title="Change name" onPress={() => setTitle('title')} />
      <TextInput
        style={styles.input}
        ref={inputRef}
        onChangeText={text => setName(text)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    margin: 20,
  },
  input: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    fontSize: 20,
  },
});

export default App;
