import { StyleSheet, Text, View, FlatList} from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fetchMenus } from '../../store/menu/menuActions'
import MenuCard from '../UI/card/MenuCard'

const Menu = () => {

    const menus=useSelector((state)=>state.menu.menus)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchMenus())
    },[])

   

    function renderMenus(itemData){
        return(
            <View>
                <MenuCard
                menu={itemData.item}
                />
            </View>
            
        )
    }
  return (
    <FlatList
        data={menus}
        keyExtractor={item=>item.id}
        numColumns={1}
        renderItem={renderMenus}
    />
  )
}

export default Menu

const styles = StyleSheet.create({})