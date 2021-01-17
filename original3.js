/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  SafeAreaViewBase,
  TouchableOpacity,
  Touchable,
  AppRegistry
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const App: () => React$Node = () => {
  // const [appname, setAppName] = useState('My Karaoke App');
  // const [description, setDescription] = useState('Personalized Karaoke Library tailored to your vocal range')
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <View style={styles.container}></View>
    </SafeAreaView>
    <View style={styles.container}>
      <View>
        <Text style={styles.titleSize}>PITCH PERFECT</Text>
      </View>
      <Text style={styles.innerText}>Personalized Karaoke Library</Text>
      <Text style={styles.innerText}>tailored to your vocal range</Text>
      <Text></Text>
    
      <TouchableOpacity onPress={() => Alert.alert("you are gay")} style={styles.button}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
      
    </View>

    </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#fa8072`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    color: `#f0fff0`
  },
  innerText: {
    color: `#f0fff0`,
    fontSize: 18,
    fontFamily: 'sans-serif-medium'
  },
  header: {
    backgroundColor: `#5600E8`,
    padding: 10,
  },
  titleSize: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: "OpenSans-Italic"

  }, 
  appButtonContainer: {
    elevation: 4,
    backgroundColor: `#fffaf0`,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: `#9400d3`,
    alignSelf: "center",
    textTransform: "uppercase"
  },
  textInput: {
    width: '90%',
    height: 50, 
    borderColor: 'black',
    borderWidth: 2,
  },
  button: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10
  },
  buttonText: {
    color: "red"
  }
});

export default App;
