/**
 * Created by mac on 2019/12/1.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';



export default class Page2 extends Component{
  render(){
      return(
          <View style={styles.container}>
             <Text style={styles.welcome}>Welcome to Page2</Text>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10
    }
});

