// LoginScreen.tsx

import React, { useState} from 'react';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Typography} from '../components/Typography';
import {CustomTextInput} from '../components/TextInput';
import {Button} from '../components/Button';
import DimensionsConfig from '../utils/dimens';
import Strings from '../utils/strings';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const userInfo: UserInfo|null= null;

  const handleLogin = async () => {
    if (validateForm()) {
      const userInfo: UserInfo = {
        username,
        email: `${username}@dummymail.com`,
        phone: "+0000000000"
      };
      await AsyncStorage.setItem('user', JSON.stringify(userInfo));
    }
  };

  const validateForm = (): boolean => {
    if (!username) {
      setError(Strings.pleaseEnterUsername);
      return false;
    }

    if (!password) {
      setError(Strings.pleaseEnterPassword);
      return false;
    }

    if(username !== password) {
      setError(Strings.pleaseEnterCorrectUsernameAndPassword);
      return false;
    }

    setError(null);
    return true;
  };

  return (
    <View style={styles.container}>
      <Typography variant="heading">Login</Typography>
      <CustomTextInput
        placeholder={Strings.username}
        autoFocus={true}
        maxLength={20}
        value={username}
        keyboardType={'email-address'}
        returnKeyType={'next'}
        onChangeText={text => {
          setUsername(text);
        }}
      />
      <CustomTextInput
        placeholder={Strings.password}
        secureTextEntry
        maxLength={20}
        keyboardType={'email-address'}
        returnKeyType={'done'}
        value={password}
        onChangeText={text => {
          console.log('Typed Password:', text);
          setPassword(text);
        }}
      />
      {error && <Typography style={styles.errorText}>{error}</Typography>}
      <Button title={Strings.login} size="large" onPress={handleLogin} style={{marginTop: DimensionsConfig.margin.large}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
});

export default LoginScreen;
