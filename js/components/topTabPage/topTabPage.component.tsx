import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, Button, View} from 'react-native';
import {RootStackScreenProps} from '../../navigators/types';
import {useSearchRepoByKeywordsQuery} from '../../services/github';

type TopTabPageProps = {
  topic: string;
};

const TopTabPage: React.FC<TopTabPageProps> = ({topic}) => {
  const {navigate} =
    useNavigation<RootStackScreenProps<'Detail'>['navigation']>();

  const {data, error, isLoading} = useSearchRepoByKeywordsQuery({
    keywords: topic,
  });

  const [s1, setS1] = useState(123);
  console.log('render page');

  const getAllKeys = async () => {
    let keys: any = [];
    try {
      keys = await AsyncStorage.getAllKeys();
      console.log(AsyncStorage.getItem('persist:root'));
    } catch (e) {
      // read key error
    }

    console.log(keys);
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{}}>Here Are {topic} Articles</Text>
      <View>
        {error ? (
          <Text>some thing wrong{JSON.stringify(error)}</Text>
        ) : isLoading ? (
          <Text>loading</Text>
        ) : data ? (
          <View>
            <Button title="keys" onPress={() => getAllKeys()}></Button>
            <Button
              title={`update fiber ${s1}`}
              onPress={() => setS1(2323)}></Button>
            <Text>{JSON.stringify(data)}</Text>
          </View>
        ) : null}
      </View>

      <Button
        title="JUMP"
        onPress={() => navigate('Detail', {id: '1234'})}></Button>
    </View>
  );
};

export default TopTabPage;
