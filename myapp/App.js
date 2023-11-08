import React from 'react';
import { StyleSheet, } from 'react-native';
import GetStarted from './Component/GetStarted';
import OnBoarding from './Component/OnBoarding';
import Product from './Component/Products';
import HealthQuiz from './Component/HealthQuiz';
import Shop from './Component/Shop';
import Checkout from './Component/Checkout';
import Discover from './Component/Discover';
import RDatabase from './Component/RDatabase';
import Schedule from './Component/Schedule';
import HealthData from './Component/HealthData';
import Juices from './Component/Juices';
import Tea from './Component/Tea';
import Food from './Component/Food';
import Herbs from './Component/Herbs';
import Meditation from './Component/Meditation';
import DoctorTeach from './Component/DoctorTeach';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='GetStarted'>
          <Stack.Screen name='GetStarted' component={GetStarted} options={{ headerShown: false }} />
          <Stack.Screen name='OnBoarding' component={OnBoarding} options={{ headerShown: false }} />
          <Stack.Screen name='Product' component={Product} options={{ headerShown: false }} />
          <Stack.Screen name='HealthQuiz' component={HealthQuiz} options={{ headerShown: false }} />
          <Stack.Screen name='Shop' component={Shop} options={{ headerShown: false }} />
          <Stack.Screen name='Checkout' component={Checkout} options={{ headerShown: false }} />
          <Stack.Screen name='Discover' component={Discover} options={{ headerShown: false }} />
          <Stack.Screen name='RDatabase' component={RDatabase} options={{ headerShown: false }} />
          <Stack.Screen name='Schedule' component={Schedule} options={{ headerShown: false }} />
          <Stack.Screen name='HealthData' component={HealthData} options={{ headerShown: false }} />
          <Stack.Screen name='Juices' component={Juices} options={{ headerShown: false }} />
          <Stack.Screen name='Tea' component={Tea} options={{ headerShown: false }} />
          <Stack.Screen name='Food' component={Food} options={{ headerShown: false }} />
          <Stack.Screen name='Herbs' component={Herbs} options={{ headerShown: false }} />
          <Stack.Screen name='Meditation' component={Meditation} options={{ headerShown: false }} />
          <Stack.Screen name='DoctorTeach' component={DoctorTeach} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
});
// rgb(8,212,198)