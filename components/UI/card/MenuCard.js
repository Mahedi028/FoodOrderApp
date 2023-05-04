import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
const MenuCard = ({menu}) => {

    const navigation=useNavigation()

    const{id,title,meal_thumbnail, price}=menu

    const thumbnail=meal_thumbnail.replace("http://127.0.0.1:8000","http://10.0.2.2:8000")

  return (
    <Pressable onPress={()=>navigation.navigate('MenuDetails', {
        id:id
    })}>
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Image
                    source={{uri:thumbnail}}
                    style={styles.itemImg}
                />
                <View style={styles.itemDescription}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>${price}</Text>
                    <View style={styles.count}>
                        <TouchableOpacity>
                            <AntDesign 
                            name="pluscircle"
                            size={24} 
                            color="black" 
                            style={{marginHorizontal:5}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="minuscircle" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.itemAction}>
                    <TouchableHighlight>
                        <Entypo name="circle-with-cross" size={24} color="black" />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    </Pressable>
    
  )
}

export default MenuCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    itemContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10,
        width:'92%',
        height:150,
        backgroundColor:'white',
        borderRadius:10,
        elevation:20
    },
    itemImg:{
        width:150,
        height:130,
        borderRadius:10,
        marginHorizontal:8
    },
    itemDescription:{
        justifyContent:'space-between',
        alignItems:'center'
    },
    count:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:8
    },
    itemAction:{
        marginHorizontal:10
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'crimson'
    },
    price:{
        fontSize:18,
        fontWeight:'bold'
    }
})