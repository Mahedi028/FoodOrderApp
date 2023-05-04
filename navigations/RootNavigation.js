import React, { Fragment } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from '../screens/auth/AuthNavigation';
const RootNavigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <AuthNavigation/>
      </NavigationContainer>
    </Fragment>
  
  )
}

export default RootNavigation