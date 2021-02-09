import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text,SafeAreaView, TouchableOpacity, View, Fragment } from 'react-native';
import moment from "moment";
import Svg, {Path} from 'react-native-svg';
  

export default function DateView() {
 
  return (
<React.Fragment>
<View style={styles.mainView}>


<Text style={{fontSize: 50, color:"#fff"}}>   { moment().format("dddd")} | </Text>

  <View style={styles.centerSpacingView}>
  <Text style={styles.white} >   { moment().format("MMMM")}
  </Text>
  <Text style={styles.white}>   { moment().format("YYYY")}
  </Text>
  </View>
  </View>


  </React.Fragment>

  );
}

const styles = StyleSheet.create({
    background:{
      position:"relative",
      bottom:20,
        width:"100%",
        height:"100%",
        margin:0,
        padding:0,
        zIndex:-3,
           },
    mainView: {
        flexDirection: "row",
        justifyContent:"center",
        padding:20,
        backgroundColor: "rgba(255,255,255,0.3)",
        margin:0,
  },
  centerSpacingView:{
    marginTop: "auto",
    marginBottom:"auto",
    fontSize: 19,
},
white:{
    color:"#fff"
}
});
