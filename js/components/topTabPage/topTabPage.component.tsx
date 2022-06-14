import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Button, View} from 'react-native';
import {RootStackScreenProps} from '../../navigators/types';

type TopTabPageProps = {
  topic: string;
};

const TopTabPage: React.FC<TopTabPageProps> = ({topic}) => {
  const {navigate} =
    useNavigation<RootStackScreenProps<'Detail'>['navigation']>();

  return (
    <View style={{flex: 1}}>
      <Text style={{}}>Here Are {topic} Articles</Text>
      <Button
        title="JUMP"
        onPress={() => navigate('Detail', {id: '1234'})}></Button>
    </View>
  );
};

export default TopTabPage;
