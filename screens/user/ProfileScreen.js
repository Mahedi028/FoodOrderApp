import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'

const ProfileScreen = ({route,navigation,user}) => {

  // const {name,email}=route.params?.userData

  // useEffect(() => {
    
  // }, [route.params?.userData])

  useEffect(()=>{

  },[user])

  const {name,email}=user
  
  
  return (
    <View>
      <Text>Welcome {name}</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})