import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchProductScreen';
import UserScreen from '../screens/UserScreen';
import ProductDetail from '../screens/ProductDetail';
import AddProduct from '../screens/AddProductScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen as React.FC}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="Product" component={ProductDetail as React.FC} />
    <Stack.Screen name="Add Product" component={AddProduct as React.FC} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'User') {
            iconName = 'user';
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen
        name="Search"
        component={
          SearchScreen as React.FC
        }
      />
      <Tab.Screen name="User" component={UserScreen as React.FC} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
