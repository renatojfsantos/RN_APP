import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//import { Container } from './styles',

export const Header = () => {
  return (
    <View>
      <Text style={styles.Title}>Olá!</Text>
      <Text style={styles.SubTitle}>Renato!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    margin: 20,
  },
  Title: {
    color: 'black',
    fontSize: 30,
  },
  SubTitle: {
    color: 'black',
    fontSize: 15,
  },
});
