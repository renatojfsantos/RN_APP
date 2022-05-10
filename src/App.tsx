import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Button} from './components/Button';
import {Header} from './components/Header';

const themeDark = {
  colors: {
    primary: 'black',
    onPrimary: 'white',
    secondary: 'red',
    onSecondary: 'black',
  },
};

const themeLight = {
  colors: {
    primary: 'white',
    onPrimary: 'black',
    secondary: 'green',
    onSecondary: 'white',
  },
};

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <SafeAreaView style={styles.App}>
        <Header />
        <Button
          onPress={() => {
            setTheme(old => {
              if (old === 'light') {
                return 'dark';
              } else {
                return 'light';
              }
            });
          }}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
