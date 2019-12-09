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
    Button,
    View,
    Text,
} from 'react-native';

import Page4 from './Page4'



export default class Login extends Component{
  render(){
      const {navigation} = this.props;
      return(
          <View style={styles.container}>
             <Text style={styles.welcome}>Welcome to Page1</Text>
              <Button
               title={'Go Back'}
               onPress = { () =>{
                   navigation.goBack();
               }
               }
              />
              <Button
                  title={'跳转到页面4'}
                  onPress = { () =>{
                      navigation.navigate('Page4');
                  }
                  }
              />
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

