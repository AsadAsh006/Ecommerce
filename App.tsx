import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Both from './src/Assets/NavigationScreen/Both'
import Login from './src/Assets/NavigationScreen/Login'
import InputText from './src/Assets/Components/InputText'
import SignUp from './src/Assets/NavigationScreen/SignUp'
import LoginSignup from './src/Assets/Components/LoginSignup'
import ProductList from './src/Assets/NavigationScreen/ProductList'
import ProductDetails from './src/Assets/NavigationScreen/ProductDetails'
import Foundation from 'react-native-vector-icons/Foundation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Catagories from './src/Assets/NavigationScreen/Catagories'
import Cart from './src/Assets/NavigationScreen/Cart'
import Category from './src/Assets/NavigationScreen/Category'
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()




const StackNavigation = () => {
  return (
    
      <Stack.Navigator screenOptions={{headerShown:false, }} initialRouteName='Productlist'>
      
        <Stack.Screen name='ProductDetails' component={ProductDetails}/>
        <Stack.Screen name='Productlist' component={ProductList}/>
        <Stack.Screen name='Input' component={InputText}/>
        <Stack.Screen name='LoginSignUp' component={LoginSignup}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Both' component={Both}/>
        <Stack.Screen name='Category' component={Category}/>
      </Stack.Navigator>

  )
}

const App =()=>{
  return(
<NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name='Stack Navigation' component={StackNavigation}/>
      <Tab.Screen name='Catagories' component={Catagories}/>
      <Tab.Screen name='Cart' component={Cart}/>
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default App 

const styles = StyleSheet.create({})




