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
    Button,
    Text,
} from 'react-native';


export default class Page5 extends Component{
    render() {
        const {navigation} = this.props;
        return <View style={styles.container}>
            <Text style={styles.welcome}>欢迎来到Page5</Text>
            <Button
                onPress={() => navigation.openDrawer()}
                title="Open drawer"
            />
            <Button
                onPress={() => navigation.toggleDrawer()}
                title="Toggle drawer"
            />
            <Button
                onPress={() => navigation.navigate('Page4')}
                title="Go to Page4"
            />
        </View>
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

