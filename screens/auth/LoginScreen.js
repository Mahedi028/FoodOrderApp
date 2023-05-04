import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { hr80 } from '../../constant/constant';
import React, { useState } from 'react'
const LoginScreen = ({navigation}) => {
    const [emailFocus, setEmailFocus]=useState(false)
    const [passwordFocus, setPasswordFocus]=useState(false)
    const [showPassword, setShowPassword]=useState(false)
  return (
    <View style={styles.formContainer}>
        <View style={styles.logo}>
            <Image
                style={styles.logoImg}
                source={require("../../assets/logo/logo.png")}   
            />
        </View>
        <View style={styles.loginForm}>
            <Text style={styles.headerText}>Sign In</Text>
            <View style={styles.inputContainer}>
                <Entypo 
                    name="email" 
                    size={24} 
                    color={emailFocus===true?color="crimson":color="black"} 
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter Email'
                    onFocus={()=>{
                        setEmailFocus(true)
                        setPasswordFocus(false)
                    }}
                />
            </View>
            <View style={styles.inputContainer}>
            <Entypo 
                name="lock" 
                size={24} 
                color={passwordFocus===true?color="crimson":color="black"}   
            />
                <TextInput
                    style={styles.input}
                    placeholder='Enter Password'
                    onFocus={()=>{
                        setEmailFocus(false)
                        setPasswordFocus(true)
                        setShowPassword(false)
                    }}
                    secureTextEntry={showPassword===false? true:false}
                />
                <Ionicons 
                name={showPassword===false?"eye-off":"eye"} 
                size={24} 
                color="black" 
                onPress={()=>setShowPassword(!showPassword)}
                />
            </View>
        </View>
        <View style={styles.hr80}/>
        <TouchableOpacity
            style={styles.btn}
            onPress={()=>navigation.navigate('Home')}
        >
            <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.forget}>Forget Password?</Text>
        <Text style={styles.or}>Or</Text>
        <Text style={{fontSize:18}}>Sign In With</Text>
        <View style={styles.gf}>
            <TouchableOpacity>
                <View style={styles.icon}>
                    <AntDesign name="google" size={24} color="crimson" />
                </View>
            </TouchableOpacity>       
            <TouchableOpacity>
                <View style={styles.icon}>
                    <FontAwesome name="facebook-square" size={24} color="blue" />
                </View>
            </TouchableOpacity>       
        </View>
        <View style={styles.hr80}/>
        <Text>
            Don't have an account?
            <Text 
                style={styles.signup}
                onPress={()=>navigation.navigate('SignUp')}
            >Sing In</Text>
        </Text>
    </View>
  )

}

export default LoginScreen

const styles = StyleSheet.create({
    formContainer:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        marginVertical:10
    },
    logoImg:{
        width:100,
        height:100
    },
    headerText:{
        fontSize:20,
        fontWeight:700,
        marginTop:10,
        marginBottom:10,
        color:'crimson'
    },
    loginForm:{
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'crimson'
    },
    inputContainer:{
        flexDirection:'row',
        width:'95%',
        backgroundColor:'white',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:10,
        borderRadius:8,
        elevation:20,
        shadowOpacity:0.5,
        shadowColor:'crimson',
        shadowOffset:{width:20,height:20},
        marginBottom:15,
    },
    input:{
        width:'80%',
        marginLeft:10,
        paddingVertical:5,
        fontSize:18
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
    forget:{
        color:'grey',
        marginBottom:10,
        marginTop:10
    },
    or:{
        color:'crimson',
        marginBottom:10,
        marginTop:10,
        fontSize:18,
        fontWeight:'bold'
    },
    gf:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        width:50,
        marginLeft:10,
        backgroundColor:'white',
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        elevation:20,
        borderRadius:8,
        marginBottom:10
    },
    signup:{
        fontSize:15,
        marginTop:10,
        color:'crimson',
        fontWeight:'bold',
        marginRight:8
    }
})