import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Tab, Header } from 'native-base';


class MinningScreen extends React.Component {
  render() {
    return (
        <Header>
        <Text>MinningScreen</Text>
      </Header>

    );
  }
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
export default MinningScreen;