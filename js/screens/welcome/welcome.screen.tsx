import {Text, View} from 'react-native';
import React from 'react';
import styles from './welcome.style';

type WelcomeProps = {
  second: number; // 多少秒后跳转
};

const Welcome: React.FC<WelcomeProps> = ({second}) => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text>广告将在{second}后关闭</Text>
    </View>
  );
};

export default Welcome;
