import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const Input = ({
  label,
  inputConfig,
  iconConfig,
  passwordConfig,
  errors
}) => {

  const inputStyles=[styles.input];

  if(inputConfig && inputConfig.multiline){
    inputStyles.push(styles.inputMultiline)
  }

  let iconButton=""

  if(inputConfig.secureTextEntry){
    iconButton=(
      <Ionicons 
      {...passwordConfig}
      />
    )
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWithIcon}>
          <Entypo  
            style={styles.icon} 
            {...iconConfig}
          />
          <TextInput
            style={[styles.input, inputStyles]}
            {...inputConfig}
          />
        {iconButton}
      </View>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputContainer:{
      width:'95%',
      marginHorizontal:6,
      marginVertical:8,
      elevation:20
    },
    label:{
      fontSize:18,
      marginVertical:8,
      color:'crimson'
    },
    input:{
      width:'80%',
      padding:10,
      fontSize:18,
      color:'white',
      fontWeight:'bold'
    },
    inputMultiline:{
      minHeight:100,
      textAlignVertical:'top'
    },
    icon:{
      marginHorizontal:8
    },
    inputWithIcon:{
      width:'100%',
      padding:5,
      backgroundColor:'crimson',
      borderRadius:30,
      flexDirection:'row',
      alignItems:'center'
    }
})