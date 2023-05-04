import { Pressable, StyleSheet} from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 

const IconButton = ({icon,color,onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.iconBtn}>
        <FontAwesome5 name={icon} size={24} color={color} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    iconBtn:{
        marginHorizontal:15
    }
})