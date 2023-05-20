import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable ,ScrollView} from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMenu } from '../store/menu/menuActions'
import Bedge from '../components/UI/bedge/bedge'
import { Ionicons } from '@expo/vector-icons';
const MenuDetailsScreen = ({route, user}) => {

    const {name,email}=user

    // useEffect(()=>{

    // },[user])

    const menu=useSelector((state)=>state.menu.menuDetails || {})
    const{title,description,price,discount_price,meal_thumbnail,ingredients,dietary_info,in_stock}=menu


    const thumbnail=(meal_thumbnail||'').replace("http://127.0.0.1:8000","http://10.0.2.2:8000")
    const allIngredients= typeof ingredients === 'string' ? ingredients.split(",") : '';
    const allDietaryInfos= typeof dietary_info === 'string' ? dietary_info.split(",") : '';

    const dispatch=useDispatch()
    const{id}=route.params

    useEffect(()=>{
        dispatch(fetchMenu({id}))
    },[id, user])
  return (
    <ScrollView>
     <View style={styles.container}>
        <Text style={styles.head}>Welcome {name}</Text>
        <Text style={styles.head}>{title}</Text>
        <Image
            source={{uri:thumbnail}}
            style={styles.menuImg}
        />
        <View style={styles.actionContainer}>
            <Text style={styles.price}>${price}</Text>
            <View style={styles.action}>
                <TouchableOpacity
                    style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}
                >
                    <Text style={{fontSize:30, fontWeight:'bold', color:'white'}}>+</Text>
                </TouchableOpacity>
                <Text style={{fontSize:35, fontWeight:'bold', color:'white'}}>1</Text>
                <TouchableOpacity
                    style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}
                >
                    <Text style={{fontSize:30, fontWeight:'bold', color:'white'}}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Text style={styles.head}>Ingredients</Text>
        <View style={{width:'100%',flexWrap:'wrap',flexDirection:'row', justifyContent:'space-around',alignItems:'center'}}>
            {
            allIngredients && allIngredients.length > 0 ?
            allIngredients.map(text=><Bedge name={text}/>):null
            }
        </View>
        <Text style={styles.head}>Dieate</Text>

        <View style={{width:'100%',flexWrap:'wrap',flexDirection:'row', justifyContent:'space-around',alignItems:'center'}}>
            {
            allDietaryInfos && allDietaryInfos.length > 0 ?
            allDietaryInfos.map(text=><Bedge name={text}/>):null
            }
        </View>
        <View style={{width:'90%'}}>
            <Text style={styles.head}>Details</Text>
            <Text style={styles.details}>{description}</Text>
        </View>
        <View 
            style={{width:'100%',flexDirection:'row',justifyContent:'space-around', alignItems:'center', marginVertical:8}}
        >
            <Pressable>
                <View style={styles.Addbtn}>
                    <Text style={{color:'white', fontSize:20}}>+</Text>
                    <Text style={{color:'white', fontSize:20}}>ADD TO CART</Text>
                </View>
            </Pressable>
            <Pressable>
                <Ionicons name="ios-heart-circle-sharp" size={40} color="crimson" />
            </Pressable>
        </View>
    </View>
    </ScrollView>
   
  )
}

export default MenuDetailsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        marginVertical:10,
        backgroundColor:'white'
    },
    head:{
        fontSize:22,
        fontWeight:'bold',
        color:'crimson',
        marginVertical:5,
        marginHorizontal:5
    },
    menuImg:{
        width:'100%',
        height:300,
        resizeMode:'contain',
        marginVertical:8,
        backgroundColor:'white'
    },
    actionContainer:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    action:{
        width:120,
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'crimson',
        padding:8,
        marginHorizontal:10,
        borderRadius:40
    },
    price:{
        marginHorizontal:8,
        fontSize:25,
        fontWeight:'bold',
        color:'crimson'
    },
    details:{
        padding:8,
        fontSize:15
    },
    Addbtn:{
        width:'100%',
        paddingHorizontal:15,
        paddingVertical:8,
        backgroundColor:'crimson',
        borderRadius:40
    }
})