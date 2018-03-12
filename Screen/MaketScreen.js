import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from "react-navigation";
//import { Tab,Header } from 'native-base';
import {Provider} from 'react-redux';

import HeaderStack from '../src/compoment/HeaderStack';
//import Store from '../src/Store';



class MaketScreen extends React.Component {
  render() {
    return (
       // <Provider store={Store}>
        <View>
          <HeaderStack/>
        </View>
      //  </Provider>
    );
  }
}
export default MaketScreen;