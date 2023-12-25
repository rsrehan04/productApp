import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Button} from '../components/Button';
import {Typography} from '../components/Typography';
import LoginScreen from './LoginScreen';
import Strings from '../utils/strings';
import { UserScreenProps } from '../navigation/NavigationTypes';


const UserScreen: React.FC<UserScreenProps> = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userString = await AsyncStorage.getItem('user');

        if (userString) {
          const user: UserInfo = JSON.parse(userString);
          setUserInfo(user);
        }
      } catch (error) {
        console.warn('Unable to fetch user information:', error);
      }
    };

    fetchUserInfo();
  }, [userInfo]);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    setUserInfo(null);
  };

  return (
    <View style={styles.container}>
      {userInfo ? (
        <View style={styles.infoContainer}>
          <Typography
            variant="heading"
            style={{alignSelf: 'center', marginBottom: 40}}>
            {Strings.userInformation}
          </Typography>
          <InfoRow
            icon={<FontAwesome name="user" size={24} color="blue" />}
            label={Strings.username}
            value={userInfo.username}
          />
          <InfoRow
            icon={<Feather name="mail" size={24} color="blue" />}
            label={Strings.email}
            value={userInfo.email}
          />
          <InfoRow
            icon={<MaterialIcons name="phone" size={24} color="blue" />}
            label={Strings.phone}
            value={userInfo.phone}
          />

          <Button
            size="small"
            title={Strings.logout}
            onPress={handleLogout}
            style={{alignSelf: 'flex-end', marginTop: 20}}
          />
        </View>
      ) : (
        <LoginScreen />
      )}
    </View>
  );
};

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoRow: React.FC<InfoRowProps> = ({icon, label, value}) => (
  <View style={styles.row}>
    {icon}
    {/* <Typography variant="subheading" style={styles.label}>
      {label}
    </Typography> */}
    <Typography variant="body" style={styles.labelValueContainer}>{value}</Typography>
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 16,
  },
  infoContainer: {
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  labelValueContainer: {
    marginLeft: 8,
  },
  label: {
    fontSize: 18,
    marginBottom: 4,
  },
});

export default UserScreen;
