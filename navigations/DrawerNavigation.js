import React, { Fragment, useLayoutEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ProfileScreen from '../screens/user/ProfileScreen'
import HomeScreen from '../screens/HomeScreen'
import TabNavigation from './TabNavigation'
import IconButton from '../components/UI/button/IconButton'
const DrawerNavigation = ({navigation}) => {

    const Drawer=createDrawerNavigator()


    function headerBtnHandler(){
        console.log("pressed")
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return (<IconButton icon="user-alt" color="white" onPress={headerBtnHandler}/>)
            }
        })
    },[navigation,headerBtnHandler])

  return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle:{backgroundColor:'crimson'},
                headerTintColor:'white',
                sceneContainerStyle:{backgroundColor:'white'},
                drawerContentStyle:{backgroundColor:'crimson'},
                drawerInactiveTintColor:'white',
                drawerActiveTintColor:'black',
                drawerActiveBackgroundColor:'white'
            }}
        >
            <Drawer.Screen name="Khabo" component={TabNavigation}/>
            <Drawer.Screen name='Profile' component={ProfileScreen}/>
        </Drawer.Navigator>  
        )
}

export default DrawerNavigation