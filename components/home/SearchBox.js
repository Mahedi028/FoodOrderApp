import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const SearchBox = () => {
  return (
    <View style={styles.searchBox}>
              <FontAwesome5 name="search" size={24} color="crimson" style={{paddingVertical:5}}/>
              <TextInput
                placeholder="find a restaurant"
                style={styles.search}
              />
            </View>
  )
}

export default SearchBox

const styles = StyleSheet.create({
    searchBox:{
        marginTop:8,
        width:'90%',
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'center',
        padding:8,
        backgroundColor:'white',
        borderRadius:30,
        elevation:20
      },
      search:{
        width:'90%',
        marginLeft:8,
        paddingVertical:5,
        fontSize:18,
        color:'crimson'
      },
})