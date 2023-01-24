import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNav from './HomeNav';
import Account from '../Screens/Account';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator mode="modal"  initialRouteName="Home"
    >
      <Tab.Screen
        name="test"
        component={Account}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          activeTintColor: '#2a52be',
          inactiveTintColor: '#b5b5b5',
          tabBarIcon: ({focused, tintColor}) => {
            return (
              <Icon2
                name="account"
                style={{padding: 0}}
                size={25}
                color={focused ? '#2a52be' : '#b5b5b5'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="test2"
        component={Account}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          activeTintColor: '#2a52be',
          inactiveTintColor: '#b5b5b5',
          tabBarIcon: ({focused, tintColor}) => {
            return (
              <Icon2
                name="account"
                style={{padding: 0}}
                size={25}
                color={focused ? '#2a52be' : '#b5b5b5'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeNav}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          activeTintColor: '#2a52be',
          inactiveTintColor: '#b5b5b5',
          tabBarIcon: ({focused, tintColor}) => {
            return (
              <Icon
                name="home"
                style={{padding: 0}}
                size={25}
                color={focused ? '#2a52be' : '#b5b5b5'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="test3"
        component={Account}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          activeTintColor: '#2a52be',
          inactiveTintColor: '#b5b5b5',
          tabBarIcon: ({focused, tintColor}) => {
            return (
              <Icon2
                name="account"
                style={{padding: 0}}
                size={25}
                color={focused ? '#2a52be' : '#b5b5b5'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="test4"
        component={Account}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          activeTintColor: '#2a52be',
          inactiveTintColor: '#b5b5b5',
          tabBarIcon: ({focused, tintColor}) => {
            return (
              <Icon2
                name="account"
                style={{padding: 0}}
                size={25}
                color={focused ? '#2a52be' : '#b5b5b5'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
