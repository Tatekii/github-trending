import {Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './welcome.style';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/navigation.types';

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Main'>;

const Welcome = () => {
  const {navigate} = useNavigation<HomeScreenNavigationProp>();

  const [second, setSecond] = useState<number>(3);
  const timerRef = useRef<NodeJS.Timer | null>();

  // 等second跳转
  useEffect(() => {
    if (second <= 1) {
      clearInterval(timerRef.current!);
      timerRef.current = null;
      console.log(second, 'jump');
      navigate('Main');
    }
  }, [second, navigate]);
  // 初始化一次倒计时
  useEffect(() => {
    if (timerRef.current) {
      return;
    }
    timerRef.current = setInterval(() => {
      setSecond(v => v - 1);
    }, 1000);
  }, []);

  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text>广告将在{second}后关闭</Text>
    </View>
  );
};

export default Welcome;
