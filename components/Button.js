import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text,SafeAreaView, TouchableOpacity, View, Fragment } from 'react-native';
import moment from "moment";
import Svg, {Path} from 'react-native-svg';
  

export default function Button() {
 
  return (
<React.Fragment>
<TouchableOpacity style={styles.button} onPress={()=>console.log(22)}>
<View style={{display:"flex", flexDirection:"row"}}>
<View>
<Text> Ready for todays excercises? </Text>
<Text style={{marginTop:25}}>  LEGS | OVERALL | DDDD</Text>
</View>


</View>
</TouchableOpacity>
  </React.Fragment>

  );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#fffd",
        marginTop:20,
        padding:30 ,
        paddingBottom:10,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        }
               },
});
