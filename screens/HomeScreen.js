import { StyleSheet, Text, View,TextInput, ScrollView} from 'react-native'
import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react'
import IconButton from '../components/UI/button/IconButton'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Categories from '../components/home/Categories';
import OfferSlider from '../components/home/OfferSlider';
import Menu from '../components/home/Menu';
import SearchBox from '../components/home/SearchBox';



const HomeScreen = ({navigation}) => {



    function headerBtnHandler(){
        console.log("pressed")
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return (<IconButton icon="user-alt" color="crimson" onPress={headerBtnHandler}/>)
            }
        })
    },[navigation,headerBtnHandler])

   

    

  return (
    <Fragment>
      <ScrollView>
      <View style={styles.container}>
          <SearchBox/>
          <Categories/>
          <OfferSlider/>
          <Menu />
        </View>
      </ScrollView>
    </Fragment>
   
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  
 
})