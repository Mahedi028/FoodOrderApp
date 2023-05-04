import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../WelcomeScreen';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from '../HomeScreen';
import DrawerNavigation from '../../navigations/DrawerNavigation';
import TabNavigation from '../../navigations/TabNavigation';
import MenuDetailsScreen from '../MenuDetailsScreen';
export default function AuthNavigation() {

    const Stack=createStackNavigator()

  return (
    <Stack.Navigator 
    initialRouteName='Welcome'

    // screenOptions={{
    //   headerShown:false
    // }}
  >
    <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen}
        options={{
        headerShown:false
        }}
      />
    <Stack.Screen 
        name="SignUp" 
        component={SignUpScreen}
        options={{
        headerShown:false
        }}
        />
    <Stack.Screen 
        name="SignIn" 
        component={LoginScreen}
        options={{
        headerShown:false
        }}
        />
    <Stack.Screen 
      name="Home" 
      component={DrawerNavigation}
      options={{
        // title:'Khabo',
        headerShown:false,
        // headerStyle:{
        //   backgroundColor:'crimson',
        // },
        // headerTintColor:'white',
        // headerTitleStyle:{
        //   fontWeight:'bold',
        //   textAlign:'center'
        // },
        // headerRight:()=>(
        //   <Button
        //     style={styles.profile}
        //     title='Tap'
        //     onPress={()=>alert('this is button')}
        //   />
        // )
      }}
      />
      <Stack.Screen
        name='MenuDetails'
        component={MenuDetailsScreen}
      />
  </Stack.Navigator>
  )
}

