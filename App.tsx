import React from 'react';
import {SafeAreaView} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {StripeProvider} from '@stripe/stripe-react-native';
import CardInput from './src/CardInput';
import {PUBLISHABLE_KEY} from './src/const';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NativeBaseProvider>
        <StripeProvider publishableKey={PUBLISHABLE_KEY}>
          <CardInput />
        </StripeProvider>
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

export default App;
