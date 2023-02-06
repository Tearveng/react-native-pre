import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {Text, View, Button} from 'react-native';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from './counterSlice';
const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  // const onTextChange = (text: any) => {
  //   setAmount(text.replace(/[^0-9]/g, ''));
  // };

  return (
    <View>
      <Text>{count}</Text>
      <Button onPress={() => dispatch(increment())} title="increment"></Button>
      <Button onPress={() => dispatch(decrement())} title="decrement"></Button>
      <Button
        onPress={() => dispatch(incrementByAmount(10))}
        title="incrementByAmount"></Button>
    </View>
  );
};

export default Counter;
