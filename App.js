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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Separator = () => (
  <View style={styles.separator} />
);

const App: () => React$Node = () => {
  // const [appname, setAppName] = useState('My Karaoke App');
  // const [description, setDescription] = useState('Personalized Karaoke Library tailored to your vocal range')
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleSize}>PITCH PERFECT</Text>
      </View>
      <Text style={styles.innerText}>Personalized Karaoke Library</Text>
      <Text style={styles.innerText}>tailored to your vocal range</Text>
      <Text></Text>
      <Button
      style={styles.appButtonText}
      color= 'white'
      onPress={() => Alert.alert('GET STARTED')}
      title = "hello"
      />
      
     
    </View>
    </SafeAreaView>
    );
}

const AppButton = ({ onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#5600E8`,
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
    fontSize: 35,
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
  }
});

export default App;
