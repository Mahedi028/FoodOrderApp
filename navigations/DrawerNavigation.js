import React, { Fragment, useEffect, useLayoutEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ProfileScreen from '../screens/user/ProfileScreen'
import HomeScreen from '../screens/HomeScreen'
import TabNavigation from './TabNavigation'
import IconButton from '../components/UI/button/IconButton'
import { useDispatch } from 'react-redux'
import { logout } from '../store/auth/authSlice'
const DrawerNavigation = ({navigation, route, user}) => {

    const dispatch=useDispatch()
    const Drawer=createDrawerNavigator()

    // const {userData}=route.params

    // useEffect(() => {
      
    // }, [route.params?.userData])

    useEffect(() => {
      
    }, [user])
    

    console.log("[drawer]",user)


    function headerBtnHandler(){
        console.log("pressed")
    }

    // useLayoutEffect(()=>{
    //     navigation.setOptions({
    //         headerRight:()=>{
    //             return (<IconButton icon="user-alt" color="white" onPress={headerBtnHandler}/>)
    //         }
    //     })
    // },[navigation,headerBtnHandler])

  return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle:{backgroundColor:'crimson'},
                headerTintColor:'white',
                sceneContainerStyle:{backgroundColor:'white'},
                drawerContentStyle:{backgroundColor:'crimson'},
                drawerInactiveTintColor:'white',
                drawerActiveTintColor:'black',
                drawerActiveBackgroundColor:'white',
            }}
            options={{
                    headerLeft:()=>{
                    return (<IconButton icon="user-alt" color="white" onPress={()=>dispatch(logout())}/>)
                }
                }}>
            {/* <Drawer.Screen 
                name="Khabo" 
                component={TabNavigation}
                /> */}
                <Drawer.Screen
                    name='Khabo'
                >
                {props=>(<TabNavigation user={user} {...props}/>)}
                </Drawer.Screen>
            {/* <Drawer.Screen 
                initialParams={{user}}
                name='Profile' 
                component={ProfileScreen}
                /> */}
                <Drawer.Screen
                    name="Profile"
                >
                    {props=>(<ProfileScreen user={user} {...props}/>)}
                </Drawer.Screen>
        </Drawer.Navigator>  
        )
}

export default DrawerNavigation