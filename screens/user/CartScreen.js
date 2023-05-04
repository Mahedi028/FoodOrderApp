import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from '../../components/cart/CartItem'

const CartScreen = () => {
  return (
    <CartItem/>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})