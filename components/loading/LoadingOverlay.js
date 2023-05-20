import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const LoadingOverlay = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large"/>
    </View>
  )
}

export default LoadingOverlay

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:32
    },
    message:{
        fontSize:16,
        marginBottom:12
    }
})