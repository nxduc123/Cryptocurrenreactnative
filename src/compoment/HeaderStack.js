import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Tab, Header } from 'native-base';

/* 
class HeaderStack extends React.Component {
  render() {
    return (
        <View><Text>Header View</Text></View>
    );
  }
}
 */

const HeaderStack = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.header}>
        Cryptocurrency App
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    display: "flex",
    marginTop: 25,
  },
  header :{
    fontWeight: "bold",
    fontSize: 20,
  }
})

 export default HeaderStack;