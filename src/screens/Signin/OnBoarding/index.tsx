import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from '~/components/Button';
import {useAuth} from '~/hooks/useAuth';

export const OnBoarding = () => {
  const {signIn, loading} = useAuth();

  return (
    <SafeAreaView>
      <Button
        loading={loading}
        onPress={() =>
          signIn({
            email: 'renato.jfs@gmail.com',
            password: '$@$123456ABC',
          })
        }>
        Sign In
      </Button>
    </SafeAreaView>
  );
};
