import { TouchableOpacity, ScrollView, StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Input from '../UI/input/Input';
import { useDispatch,useSelector} from 'react-redux'
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { registerUser } from '../../store/auth/authActions';
import { useNavigation } from '@react-navigation/native'

const Register = () => {
    
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const {loading,error,success,token,isLoggedIn,user,message}=useSelector((state)=>state.auth)
    
    const [usernameFocus, setUsernameFocus]=useState(false)
    const [emailFocus, setEmailFocus]=useState(false)
    const [passwordFocus, setPasswordFocus]=useState(false)
    const [showPassword, setShowPassword]=useState(false)
    const [confirmPasswordFocus, setConfirmPasswordFocus]=useState(false)
    const [showConfirmPassword, setShowConfirmPassword]=useState(false)
    const [phoneFocus, setPhoneFocus]=useState(false)


    const [inputValues, setInputValues]=useState({
        username:'',
        email:'',
        password:'',
        password_confirmation:'',
        phone_number:'',
        dob:'',
        address:''
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

        if(!inputValues.username){
            errors.username="Username is required";
        }else if(!nameRegex.test(inputValues.username)){
            errors.username="Username should be 3-16 characters and shouldn't include any special character"
        }
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

        if(inputValues.password_confirmation!=inputValues.password){
            errors.password_confirmation="Password do not matched"
        }

        if(!inputValues.phone_number){
            errors.phone_number="Phone Number is required"
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
            console.log("[values]",inputValues)
            dispatch(registerUser())
        }
        //reset form values
        setInputValues({
            username:'',
            email:'',
            password:'',
            password_confirmation:'',
            phone_number:'',
            dob:'',
            address:''
        })
    }

    if(loading){
        return <LoadingOverlay/>
    }else{
        return (
                <SafeAreaView style={{flex:1}}>
                    <ScrollView contentStyle={{flex:1}}>
                    <View style={styles.container}>
                    <View style={styles.form}>
                        <Text style={styles.head}>SignUp</Text>
                        <Input
                            label="Username"
                            inputConfig={{
                                placeholder:"enter username",
                                onChangeText:inputChangeHandler.bind(this, 'username'),
                                onFocus:()=>{
                                    setUsernameFocus(true)
                                    setEmailFocus(false)
                                    setPasswordFocus(false)
                                    setConfirmPasswordFocus(false)
                                    setPhoneFocus(false)
                                },
                                value:inputValues.username
                            }}
                            iconConfig={{
                                name:"user",
                                size:24,
                                color:usernameFocus===true?color="white":color="black"
                            }}
                        />
                        {
                            validationErrors && validationErrors.username?(<Text style={{color:'red', fontSize:15, fontWeight:'bold'}}>{validationErrors.username}</Text>):null
                        }
                        <Input
                            label="Email"
                            inputConfig={{
                                placeholder:"enter email",
                                keyboardType:'email-address',
                                onChangeText:inputChangeHandler.bind(this,'email'),
                                onFocus:()=>{
                                    setUsernameFocus(false)
                                    setEmailFocus(true)
                                    setPasswordFocus(false)
                                    setConfirmPasswordFocus(false)
                                    setPhoneFocus(false)
                                },
                                value:inputValues.email,
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
                                    setUsernameFocus(false)
                                    setEmailFocus(false)
                                    setPasswordFocus(true)
                                    setShowPassword(false)
                                    setConfirmPasswordFocus(false)
                                    setPhoneFocus(false)
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
                        <Input
                            label="Confirm Password"
                            inputConfig={{
                                placeholder:"enter confirm password",
                                secureTextEntry:showConfirmPassword===false? true:false,
                                onChangeText:inputChangeHandler.bind(this,'password_confirmation'),
                                onFocus:()=>{
                                    setUsernameFocus(false)
                                    setEmailFocus(false)
                                    setPasswordFocus(false)
                                    setShowConfirmPassword(false)
                                    setConfirmPasswordFocus(true)
                                    setPhoneFocus(false)
                                },
                                value:inputValues.password_confirmation
                            }}
                            iconConfig={{
                                name:"lock",
                                size:24,
                                color:confirmPasswordFocus===true?color="white":color="black"
                            }}
                            passwordConfig={{
                                name:showConfirmPassword===false?"eye-off":"eye",
                                size:24,
                                color:"white",
                                onPress:()=>setShowConfirmPassword(!showConfirmPassword)
                            }}
                        />
                        {
                            validationErrors && validationErrors.password_confirmation?(<Text style={{color:'red', fontSize:15, fontWeight:'bold'}}>{validationErrors.password_confirmation}</Text>):null
                        }
                        <Input
                            label="Phone Number"
                            inputConfig={{
                                placeholder:"enter phone number",
                                keyboardType:'phone-pad',
                                onChangeText:inputChangeHandler.bind(this,'phone_number'),
                                onFocus:()=>{
                                    setUsernameFocus(false)
                                    setEmailFocus(false)
                                    setPasswordFocus(false)
                                    setConfirmPasswordFocus(false)
                                    setPhoneFocus(true)
                                },
                                value:inputValues.phone_number
                            }}
                            iconConfig={{
                                name:"phone",
                                size:24,
                                color:phoneFocus===true?color="white":color="black"
                            }}
                        />
                        {
                            validationErrors && validationErrors.phone_number?(<Text style={{color:'red', fontSize:15, fontWeight:'bold'}}>{validationErrors.phone_number}</Text>):null
                        }
                        <Input
                            label="BirthDate"
                            inputConfig={{
                                placeholder:"YYYY-MM-DD",
                                onChangeText:inputChangeHandler.bind(this,'dob'),
                                maxLength:10,
                                value:inputValues.dob
                            }}
                        />
                        <Input
                            label="Address"
                            inputConfig={{
                                placeholder:"enter address",
                                onChangeText:inputChangeHandler.bind(this,'address'),
                                multiline:true,
                                // autoCorrect:false default is true
                                // autoCapitalize:false,
                                value:inputValues.address
                            }}
                        />
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={submitHandler}
                        >
                            <Text style={styles.btnText}>SIGN UP</Text>
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
                        <Text>
                        Aready have an account?
                        <Text 
                            style={styles.signup}
                            onPress={()=>navigation.navigate('SignIn')}
                        >Sing In</Text>
                        </Text>
                        </View>
                    </View>
                    </ScrollView>
                </SafeAreaView>
              )
            
            }
    
}

export default Register

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
