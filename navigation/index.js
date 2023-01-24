import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomStack from './bottomstack';
import {useSelector, useDispatch} from 'react-redux';
const Stack = createStackNavigator();

export default function StackNavigator() {
  const login = useSelector(state => state.login && state.login.session_token);
  return (
    <NavigationContainer>  
        <Stack.Navigator mode="modal">
          <Stack.Screen
            name="Home"
            component={BottomStack}
            options={{headerShown: false}}
          />
        
        </Stack.Navigator>
    </NavigationContainer>
  );
}
