import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = () => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Input</Text>
      <TextInput
        style={styles.input}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputContainer:{

    },
    label:{

    },
    input:{
        
    }

})