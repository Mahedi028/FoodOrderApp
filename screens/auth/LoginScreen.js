import {StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { loginUser } from '../../store/auth/authActions'
import Input from '../../components/UI/input/Input'

const SignInScreen = ({navigation, route}) => {
    
  const dispatch=useDispatch()
  const {loading,error,success,token,isLoggedIn,user,message}=useSelector((state)=>state.auth)

  const [emailFocus, setEmailFocus]=useState(false)
  const [passwordFocus, setPasswordFocus]=useState(false)
  const [showPassword, setShowPassword]=useState(false)

  const [inputValues, setInputValues]=useState({
    email:'',
    password:'',
})

  const [validationErrors, setValidationErrors]=useState({})


  function inputChangeHandler(InputIndentifier,enteredValue){
    setInputValues((currentValues)=>{
        return {
            ...currentValues,
            [InputIndentifier]:enteredValue
        }
    })
}

//check input validation
const validate=()=>{
    const errors={};
    const nameRegex= /^[A-Za-z0-9]{3,16}$/;
    const emailRegex= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const passwordRegex= /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

   
    if(!inputValues.email){
        errors.email="Email is required";
    }else if(!emailRegex.test(inputValues.email)){
        errors.email="It should be a valid email address";
    }

    if(!inputValues.password){
        errors.password="Password is required";
    }else if(inputValues.password.length < 4){
        errors.password="Password must be more than 4 characters";
    }else if(inputValues.password.length > 15){
        errors.password="Password cannot exceed more than 10 characters";
    }else if(!passwordRegex.test(inputValues.password)){
        errors.password="Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character"
    }



    return errors
}

 //check empty validationError objects
 const isObjectEmpty = (objectName) => {
    return (
      objectName &&
      Object.keys(objectName).length === 0 &&
      objectName.constructor === Object
    );

};

function submitHandler(){

    //input validations
    const errors=validate(inputValues)

    setValidationErrors(errors)

    if(!isObjectEmpty(errors)){
        return

    }else{
        console.log("[value]",inputValues)
        dispatch(loginUser(inputValues))
    }
    //reset form values
    setInputValues({
        email:'',
        password:'',
    })
}

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
    <View style={styles.form}>
        <Text style={styles.head}>SignIn</Text>
        <Text style={{color:'crimson',fontSize:24}}>{message?message:null}</Text>
        <Input
            label="Email"
            inputConfig={{
                placeholder:"enter email",
                keyboardType:'email-address',
                onChangeText:inputChangeHandler.bind(this,'email'),
                onFocus:()=>{
                    setEmailFocus(true)
                    setPasswordFocus(false)
                },
                value:inputValues.email
            }}
            iconConfig={{
                name:"email",
                size:24,
                color:emailFocus===true?color="white":color="black"
            }}
        />
            {
            validationErrors && validationErrors.email?(<Text style={{color:'red', fontSize:15, fontWeight:'bold'}}>{validationErrors.email}</Text>):null
            }
        <Input
            label="Password"
            inputConfig={{
                placeholder:"enter password",
                secureTextEntry:showPassword===false? true:false,
                onChangeText:inputChangeHandler.bind(this,'password'),
                onFocus:()=>{
                    setEmailFocus(false)
                    setShowPassword(false)
                    setPasswordFocus(true)
                },
                value:inputValues.password
            }}
            iconConfig={{
                name:"lock",
                size:24,
                color:passwordFocus===true?color="white":color="black"
            }}
            passwordConfig={{
                name:showPassword===false?"eye-off":"eye",
                size:24,
                color:"white",
                onPress:()=>setShowPassword(!showPassword)
            }}
        />
         {
            validationErrors && validationErrors.password?(<Text style={{color:'red', fontSize:15, fontWeight:'bold'}}>{validationErrors.password}</Text>):null
            }
         <TouchableOpacity
                style={styles.btn}
                onPress={submitHandler}
            >
                <Text style={styles.btnText}>SIGN IN</Text>
            </TouchableOpacity>
        </View>
        <Text>Aready have an account?
            <Text 
                style={styles.signup}
                onPress={()=>navigation.navigate('SignUp')}
                >Sing Up</Text>
                </Text>
        </View>
    </SafeAreaView>
    
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    marginVertical:8,
    backgroundColor:'white'
  },
  form:{
      width:'90%',
      fontSize:18,
      justifyContent:'center',
      alignItems:'center'
  },
  head:{
      textAlign:'center',
      fontSize:20
  },
  btnText:{
    textAlign:'center',
    color:'white',
    fontSize:18,
    fontWeight:700,
    fontSize:20
    },
btn:{
    width:'50%',
    backgroundColor:'crimson',
    paddingHorizontal:15,
    paddingVertical:8,
    marginRight:8,
    textAlign:'center', 
    borderRadius:10
},
signup:{
    fontSize:15,
    marginTop:10,
    color:'crimson',
    fontWeight:'bold',
    marginRight:8,
}
})