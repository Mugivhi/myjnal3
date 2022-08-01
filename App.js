import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import Otp from './src/componets/welcomepage';
import Landingpage from './src/componets/Landingpage';
import { StyleSheet } from 'react-native';
const Stack = createNativeStackNavigator();
const MyApp = () =>
 {
  return (
    // <View>
    //   <Landingpage/>
    // </View>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{ title: 'welcomepage' }}
      />
      <Stack.Screen name="Landingpage" component={Landingpage}
      options={{ title: 'Landingpage' }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
  }
export default MyApp;