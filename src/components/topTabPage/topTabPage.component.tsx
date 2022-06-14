import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Button, View} from 'react-native';
import {RootStackScreenProps} from '../../navigators/types';

const TopTabPage = () => {
  const {navigate} =
    useNavigation<RootStackScreenProps<'Detail'>['navigation']>();

  return (
    <View>
      <Text>test jump to detail</Text>
      <Button
        title="JUMP"
        onPress={() => navigate('Detail', {id: '1234'})}></Button>
    </View>
  );
};

export default TopTabPage;
