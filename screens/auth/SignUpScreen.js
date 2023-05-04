import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { hr80 } from '../../constant/constant';
import React, { useState } from 'react'
const SignUpScreen = ({navigation}) => {

  const [usernameFocus, setUserNameFocus]=useState(false)
  const [emailFocus, setEmailFocus]=useState(false)
  const [passwordFocus, setPasswordFocus]=useState(false)
  const [showPassword, setShowPassword]=useState(false)
  const [confirmPasswordFocus, setConfirmPasswordFocus]=useState(false)
  const [showConfirmPassword, setShowConfirmPassword]=useState(false)



  return (
    <ScrollView style={{flex:1,width:'100%', marginTop:30}}>
      <View style={styles.formContainer}>
        <View style={styles.logo}>
            <Image
                style={styles.logoImg}
                source={require("../../assets/logo/logo.png")}   
            />
        </View>
        <View style={styles.loginForm}>
            <Text style={styles.headerText}>Sign Up</Text>
            <View style={styles.inputContainer}>
                <AntDesign 
                    name="user" 
                    size={24} 
                    color={usernameFocus===true?color="crimson":color="black"} 
                    />
                <TextInput
                    style={styles.input}
                    placeholder='Enter username'
                    onFocus={()=>{
                        setUserNameFocus(true)
                        setEmailFocus(false)
                        setPasswordFocus(false)
                        setConfirmPasswordFocus(false)
                    }}
                />
            </View>
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
                        setUserNameFocus(false)
                        setEmailFocus(true)
                        setPasswordFocus(false)
                        setConfirmPasswordFocus(false)
                    }}
                />
            </View>
            <View style={styles.inputContainer}>
            <Entypo 
                name="lock" 
                size={24} 
                color={passwordFocus===true?color="crimson":color="black"
                }   
            />
                <TextInput
                    style={styles.input}
                    placeholder='Enter Password'
                    onFocus={()=>{
                        setUserNameFocus(false)
                        setEmailFocus(false)
                        setPasswordFocus(true)
                        setShowPassword(false)
                        setConfirmPasswordFocus(false)
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
            <View style={styles.inputContainer}>
            <Entypo 
                name="lock" 
                size={24} 
                color={confirmPasswordFocus===true?color="crimson":color="black"
                }   
            />
                <TextInput
                    style={styles.input}
                    placeholder='Enter Confirm Password'
                    onFocus={()=>{
                        setEmailFocus(false)
                        setPasswordFocus(false)
                        setShowPassword(false)
                        setConfirmPasswordFocus(true)
                    }}
                    secureTextEntry={showConfirmPassword===false? true:false}
                />
                <Ionicons 
                name={showConfirmPassword===false?"eye-off":"eye"} 
                size={24} 
                color="black" 
                onPress={()=>setShowConfirmPassword(!showConfirmPassword)}
                />
            </View>
        </View>
        <View style={styles.hr80}/>
        <TouchableOpacity
            style={styles.btn}
        >
            <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
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
            Aready have an account?
            <Text 
                style={styles.signup}
                onPress={()=>navigation.navigate('SignIn')}
            >Sing In</Text>
        </Text>
      </View>
    </ScrollView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  formContainer:{
      flex:1,
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      marginBottom:20
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
      marginRight:8,
  }
})