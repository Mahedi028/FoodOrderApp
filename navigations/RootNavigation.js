import React, { Fragment,useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/auth/SignUpScreen';
import SignInScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import DrawerNavigation from './DrawerNavigation';
import MenuDetailsScreen from '../screens/MenuDetailsScreen';
import { useEffect } from 'react';
import { fetchUser } from '../store/user/userActions';

const RootNavigation = () => {

  const dispatch=useDispatch()
  const {token,isLoggedIn}=useSelector((state)=>state.auth)
  const {userData}=useSelector((state)=>state.user)

  
  useEffect(() => {
    if(token!==null){
      dispatch(fetchUser())
    }
  }, [dispatch,token])

  console.log("[user]",userData)

  


  const Stack=createStackNavigator()

  function AuthStack(){

    return(
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
      </Stack.Navigator>
    )
  }

  function AuthenticatedStack(){
    return(
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen}/> */}
        <Stack.Screen
            name="Home"
            options={{
              headerShown:false
            }}
        >
          {props=>(<DrawerNavigation user={userData} {...props}/>)}
        </Stack.Screen>
        {/* <Stack.Screen name="MenuDetails" 
        component={MenuDetailsScreen}/> */}
        <Stack.Screen
          name="MenuDetails"
        >
          {props=>(<MenuDetailsScreen user={userData} {...props}/>)}
        </Stack.Screen>
      </Stack.Navigator>
    )
  }


  return (
    <Fragment>
      <NavigationContainer>
        {token!==null && userData!==null && <AuthenticatedStack/>}
        {token==null && userData==null && <AuthStack/>}
      </NavigationContainer>
    </Fragment>
  
  )
}

export default RootNavigation