import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginSignup from './LoginSignup'
const Tab = createBottomTabNavigator()
const BottomNavigation = () => {
  return (
<Tab.Navigator>
    <Tab.Screen name='LoginSignup' component={LoginSignup}/>
</Tab.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})