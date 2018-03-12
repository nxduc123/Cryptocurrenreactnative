import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import { Tab, Header } from 'native-base';

import MaketScreen from './Screen/MaketScreen';
import MinningScreen from './Screen/MinningScreen';


/* class App extends React.Component {
  render() {
    return (
      <View>
        <Header>
          <Text>Home</Text>
        </Header>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
} */
export default TabNavigator({

  Maket : {screen:MaketScreen},

  Minning :{screen: MinningScreen}

})


/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */