import { StyleSheet, Text, View, ScrollView, FlatList ,Image} from 'react-native'
import React, { useEffect } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useDispatch, useSelector} from 'react-redux';
import { fetchCategory } from '../../store/category/categoryActions';
const Categories = () => {

  const categories=useSelector((state)=>state.category.categories)

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchCategory())
  },[])

  function renderCategories(itemData){
    const {category_thumbnail}=itemData.item

    const thumbnail=category_thumbnail.replace("http://127.0.0.1:8000","http://10.0.2.2:8000")

    return(
      <View style={styles.CategoryBox}>
        <Image
          source={{uri:thumbnail}}
          style={{width:50, height:50, resizeMode:'contain'}}
        />
      <Text style={styles.CategoryTitle}>{itemData.item.name}</Text>
      </View>
    )

  }

  return (
    <View style={styles.container}>
        <Text style={styles.head}>Categories</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={item => item.id}
          renderItem={renderCategories}
        />
        {/* <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            // style={styles.CategoriesContainer}
        >
          <View style={styles.CategoryBox}>
            <MaterialCommunityIcons name="hamburger" size={24} color="black" />
            <Text style={styles.CategoryTitle}>Burger</Text>
          </View>
          <View style={styles.CategoryBox}>
            <MaterialCommunityIcons name="hamburger" size={24} color="black" />
            <Text style={styles.CategoryTitle}>Burger</Text>
          </View>
          <View style={styles.CategoryBox}>
            <MaterialCommunityIcons name="hamburger" size={24} color="black" />
            <Text style={styles.CategoryTitle}>Burger</Text>
          </View>
          <View style={styles.CategoryBox}>
            <MaterialCommunityIcons name="hamburger" size={24} color="black" />
            <Text style={styles.CategoryTitle}>Burger</Text>
          </View>
          <View style={styles.CategoryBox}>
            <MaterialCommunityIcons name="hamburger" size={24} color="black" />
            <Text style={styles.CategoryTitle}>Burger</Text>
          </View>
          <View style={styles.CategoryBox}>
            <MaterialCommunityIcons name="hamburger" size={24} color="black" />
            <Text style={styles.CategoryTitle}>Burger</Text>
          </View>
      </ScrollView> */}
    </View>
   
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        width:'90%',
        backgroundColor:'white',
        elevation:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:8,
        padding:10
    },
    head:{
        fontSize:25,
        fontWeight:'300',
        margin:10,
        paddingBottom:5,
        borderBottomColor:'black',
        borderBottomWidth:1

    },
    CategoriesContainer:{
        marginTop:8,
        width:'100%',
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
      },
      CategoryBox:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        height:60,
        backgroundColor:'white',
        marginLeft:5,
        padding:10,
        borderRadius:10,
        elevation:30
      },
      CategoryTitle:{
        marginHorizontal:10
      }
})