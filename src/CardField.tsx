import {
  CardField as StripeCardField,
  useConfirmPayment,
} from '@stripe/stripe-react-native';
import React, {useState} from 'react';
import {VStack, Text, Button} from 'native-base';
import {Alert} from 'react-native';
import {CLIENT_SECRET} from './const';

const CardField = () => {
  const {confirmPayment, loading} = useConfirmPayment();
  const [complete, setComplete] = useState<boolean>(false);

  const onPay = async () => {
    const {error, paymentIntent} = await confirmPayment(CLIENT_SECRET, {
      paymentMethodType: 'Card',
    });

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.localizedMessage);
    } else if (paymentIntent) {
      Alert.alert(
        'Success',
        `Payment was confirmed successfully! Payed: ${paymentIntent.currency} ${paymentIntent.amount}`,
      );
    }
  };

  return (
    <VStack space={2} mt={4}>
      <Text fontSize={16} bold>
        Stripe Card Field (New)
      </Text>

      <StripeCardField
        countryCode="TH"
        postalCodeEnabled={false}
        onCardChange={cardDetails => {
          setComplete(cardDetails.complete);
        }}
        style={{
          height: 30,
        }}
      />

      <Button isDisabled={!complete || loading} onPress={onPay} mt={'90%'}>
        Buy
      </Button>
    </VStack>
  );
};

export default CardField;
