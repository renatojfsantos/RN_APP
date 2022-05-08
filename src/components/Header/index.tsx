import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Props} from './types';

export const Header = (props: Props) => {
  return (
    <View>
      <Text style={styles.Title}>{props.title}</Text>
      <Text style={styles.SubTitle}>{props.name}</Text>
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
