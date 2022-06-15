import React from 'react';
import {Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {RootStackScreenProps} from '../../navigators/types';
const Detail = () => {
  const {params} = useRoute<RootStackScreenProps<'Detail'>['route']>();

  return <Text>Here is DetailPage get params = {params.id}</Text>;
};

export default Detail;
