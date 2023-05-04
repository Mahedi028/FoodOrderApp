import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import delivery from '../assets/delivery.jpg'
import { hr80 } from '../constant/constant'
const WelcomeScreen = ({navigation}) => {
   

  return (
    <View style={styles.container}>
      <Text style={styles.wlcText}>WELCOME TO KHABO</Text>
      <View style={styles.logo}>
        <Image
            source={delivery}
            style={styles.logoImg}
        />
      </View>
      <View style={hr80}/>
      <Text style={styles.text}>Time is Money Fastest Delivery, Find The best Food in your place</Text>
      <View style={hr80}/>
      <View style={styles.btnContainer}>
        <TouchableOpacity 
            style={styles.btn}
            onPress={()=>navigation.navigate('SignUp')}
        >
            <Text style={styles.btnText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.btn}
            onPress={()=>navigation.navigate('SignIn')}
        >
            <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    wlcText:{
        color:'crimson',
        fontSize:30,
        fontWeight:600
    },
    logo:{
        width:'80%',
        height:'40%',
        marginBottom:10,
    },
    logoImg:{
        width:"100%",
        height:"100%"

    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:15
    },
    btnText:{
        color:'white',
        fontSize:18,
        fontWeight:700,
        fontSize:20
    },
    btn:{
        backgroundColor:'crimson',
        paddingHorizontal:15,
        paddingVertical:8,
        marginRight:8,
        textAlign:'center', 
        borderRadius:10
    },
    text:{
        color:'crimson',
        fontSize:18,
        fontWeight:600,
        textAlign:'center',
        padding:10
    }

})