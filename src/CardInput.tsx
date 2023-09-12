import React, {useState} from 'react';
import {Box, Divider, HStack, Input, Text, VStack} from 'native-base';
import {CardForm} from '@stripe/stripe-react-native';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import CardField from './CardField';

type CardFieldProps = {
  placeholder: string;
  onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};
const Field = ({placeholder, onChange}: CardFieldProps) => {
  return (
    <Input
      height={12}
      borderRadius={8}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const CardInput = () => {
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [expiry, setExpiry] = useState<string>('');
  const [cvc, setCvc] = useState<string>('');

  const createOnChange = (
    set: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    return (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      set(event.nativeEvent.text);
    };
  };

  return (
    <Box my={4} mx={6}>
      <Box>
        <Text fontSize={16} fontWeight={800}>
          Credit card details
        </Text>
        <Text fontSize={16}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </Box>

      <VStack my={6} space={4}>
        <Field
          placeholder="Cardholder name"
          onChange={createOnChange(setName)}
        />

        <Field
          placeholder="Credit card number"
          onChange={createOnChange(setNumber)}
        />

        <HStack space={2}>
          <Box width={'49%'}>
            <Field
              placeholder={'Expiry MM/YY'}
              onChange={createOnChange(setExpiry)}
            />
          </Box>

          <Box width={'49%'}>
            <Field placeholder={'CVV'} onChange={createOnChange(setCvc)} />
          </Box>
        </HStack>
        <Text>{name}</Text>
      </VStack>

      <CardField />

      <Divider my={4} bgColor="transparent" />

      {/*<Text mb={2} fontSize={16} bold>*/}
      {/*  Stripe Card Form (Old)*/}
      {/*</Text>*/}
      {/*<CardForm defaultValues={{countryCode: 'TH'}} style={{height: '100%'}} />*/}
    </Box>
  );
};

export default CardInput;
