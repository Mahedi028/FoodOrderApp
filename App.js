import { StyleSheet, Text, View } from 'react-native';
import { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RootNavigation from './navigations/RootNavigation';
import { Provider } from 'react-redux';
import Store from './app/store';
export default function App() {

  const Stack=createStackNavigator()



  return (
    <Fragment>
        <Provider store={Store}>
          <RootNavigation/>
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
