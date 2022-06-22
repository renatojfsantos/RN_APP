import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from '~/components/Button';
import {useAuth} from '~/hooks/useAuth';

export const Home = () => {
  const {signOut} = useAuth();
  return (
    <SafeAreaView>
      <Button onPress={signOut}>Sign Out</Button>
    </SafeAreaView>
  );
};
