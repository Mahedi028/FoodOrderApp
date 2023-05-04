import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bedge = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

export default Bedge

const styles = StyleSheet.create({
    container:{
        color:'white',
        backgroundColor:'crimson',
        padding:8,
        justifyContent:"center",
        marginHorizontal:8,
        borderRadius:10,
        marginVertical:5
    },
    text:{
        color:'white',
        fontSize:15,
        fontWeight:'bold'
    }
})