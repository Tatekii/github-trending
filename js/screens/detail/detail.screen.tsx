import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {RootStackScreenProps} from '../../navigators/types';
const Detail = () => {
  const {params} = useRoute<RootStackScreenProps<'Detail'>['route']>();

  return (
    <SafeAreaView>
      <Text>Here is DetailPage get params = {params.id}</Text>
    </SafeAreaView>
  );
};

export default Detail;
