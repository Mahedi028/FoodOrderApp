import { StyleSheet, Text, View } from 'react-native';
import { Fragment, useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RootNavigation from './navigations/RootNavigation';
import { Provider } from 'react-redux';
import Store from './app/store';
import { useDispatch } from 'react-redux';
import { setUserToken } from './store/auth/authSlice';
import LoadingOverlay from './components/loading/LoadingOverlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// axios.interceptors.request.use(
//   async config=>{
//     const authToken=await AsyncStorage.getItem('token')
//     if(token){
//       // axios.defaults.headers.common['Authorization']=`Bearer ${token}`
//       config.headers.Authorization=`Bearer ${authToken}`
//     }
//     return config
//   },
//   error=>{
//     return Promise.reject(error)
//   }
// )

function Root(){
  const [isTryingLogin, setIsTryingLogin]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    
    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token')
        // console.log("[tok]",token)
        if(token !== null) {
          // value previously stored
          dispatch(setUserToken(token))
          axios.defaults.headers.common['Authorization']=`Bearer ${token}`
        }
        setIsTryingLogin(false)
      } catch(e) {
        console.log("[error]",e)
        // error reading value
      }
    }
    getToken();

  },[])

  if(isTryingLogin){
    return <LoadingOverlay/>
  }

  return <RootNavigation/>
}


export default function App() {

  const Stack=createStackNavigator()

  return (
    <Fragment>
        <Provider store={Store}>
          <Root/>
        </Provider>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
