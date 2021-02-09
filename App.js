import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text,SafeAreaView, TouchableOpacity, View, Fragment } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import {LinearGradient} from 'expo-linear-gradient'; 
import DateView from "./components/DateDisplay"
import Button from "./components/Button"

export default function App() {
const [webView, showWebView]= useState(false);
console.log(webView)
 
  return (
    <React.Fragment>

    <SafeAreaView style={styles.topSafe} />

    <SafeAreaView style={styles.container}>
       <LinearGradient
    colors={["#F67042","#FC5296" ]}
    style={styles.linearGradient}
  >
    <View style={styles.mainView}>
   
      <DateView/>
    <Button/>
      

      {webView &&
      <WebView 
      goBack={()=> showWebView(false)}
        javaScriptEnabled={true}
        onNavigationStateChange={(e) => {
          ()=> showWebView(false)
      }}        source={{ uri: 'https://www.youtube.com/watch?v=rPPu5RqB_TU' }} 
      />

      }
      <StatusBar style="auto" />
      </View>
    </LinearGradient>

    </SafeAreaView>
    <SafeAreaView style={styles.downSafe} />

    </React.Fragment>

  );
}

const styles = StyleSheet.create({
  topSafe: {
    flex: 0,
    height: Constants.statusBarHeight,
    backgroundColor:'#F67062',
  },
  downSafe: {
    flex: 0,
    height: Constants.statusBarHeight,
    backgroundColor:'#FC5296',
  },
  container: {
    flex: 1,
  },
  mainView:{
    paddingTop:20,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  linearGradient: {
    height: "100%",
    width: "100%",
  },
});
