import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CartScreen from '../screens/user/CartScreen'
import FavouriteScreen from '../screens/user/FavouriteScreen'
import HomeScreen from '../screens/HomeScreen'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { useEffect } from 'react'



export default function TabNavigation({user,route}) {

    const Tab=createBottomTabNavigator()

    useEffect(()=>{

    }, [user])

  return (
    <Tab.Navigator
      screenOptions={{
        initialRouteName:"Home",
        tabBarStyle:{
          height:80,
          borderRadius:10
        },
        tabBarLabelStyle:{
          fontSize:15,
          color:'black',
          fontWeight:'bold'
        },
        tabBarActiveBackgroundColor:'crimson',
        tabBarActiveTintColor:'white',
      }}
    >
        {/* <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            headerShown:false,
            tabBarLabel:'Home',
            tabBarIcon:({color,size})=>(
              <FontAwesome name="home" size={size} color={color}/>
            )
          }}

        /> */}
        <Tab.Screen
           name="Home" 
          // component={HomeScreen}
          options={{
            headerShown:false,
            tabBarLabel:'Home',
            tabBarIcon:({color,size})=>(
              <FontAwesome name="home" size={size} color={color}/>
            )}}
        >
          {props=>(<HomeScreen user={user} {...props}/>)}
        </Tab.Screen>
        <Tab.Screen 
          name="Cart" 
          component={CartScreen}
          options={{
            headerShown:false,
            tabBarLabel:'Cart',
            tabBarIcon:({color, size})=>(
              <FontAwesome5 name="shopping-cart" size={size} color={color} />
            ),
            tabBarBadge:2,
            tabBarBadgeStyle:{
              marginLeft:15,
            },
            tabBarItemStyle:{
              // backgroundColor:'blue',
            }
          }}
          />
        <Tab.Screen 
          name="Favorite" 
          component={FavouriteScreen}
          options={{
            headerStyle:{
              height:100
            },
            headerShown:false,
            tabBarLabel:'Favorite',
            tabBarIcon:({color, size})=>(
              <MaterialIcons name="favorite" size={size} color={color}/>
            )
          }}
          />
    </Tab.Navigator>
  )
}


