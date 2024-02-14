import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RequestScreen from '../screens/RequestScreen';
import DestinationScreen from '../screens/DestinationScreen';

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RequestScreen"
        component={RequestScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DestinationScreen"
        component={DestinationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
