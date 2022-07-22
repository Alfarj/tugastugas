import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from '../pages/home';
import akun from '../pages/akun';
import pesanan from '../pages/pesanan';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Mainapp = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen  name="Home" component={home}/>
        <Tab.Screen name="pesanan" component={pesanan} />
        <Tab.Screen name="akun" component={akun} />
      </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="mainapp" component={Mainapp} options={{headerShown : false}}/>
      </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})