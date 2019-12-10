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
    Text,
    Button,
    View
} from 'react-native';

export default class HomePage extends React.Component {
    //在这里定义每个页面的导航属性
    static navigationOptions = {
        title: 'Home',
        headerBackTitle:'返回哈哈',//设置返回此页面的返回按钮文案，有长度限制
    }
    render() {
        const {navigation} = this.props;
        return <View style={styles.container}>
            <Text style={styles.text}>欢迎来到HomePage</Text>
            <Button
                title="Go To Page1"
                onPress={() => {
                    navigation.navigate('Page1', {name: '动态的'});
                }}
            />
            <Button
                title="Go To Page2"
                onPress={() => {
                    navigation.navigate('Page2');
                }}
            />
            <Button
                title="Go To Page3"
                onPress={() => {
                    navigation.navigate('Page3',{ name: 'Devio' });
                }}
            />
            <Button
                title="Go To Bottom"
                onPress={() => {
                    navigation.navigate('Bottom');
                }}
            />
            <Button
                title="Go To Top"
                onPress={() => {
                    navigation.navigate('Top');
                }}
            />
            <Button
                title="Go To Login"
                onPress={() => {
                    navigation.navigate('Login');
                }}
            />
            <Button
                title="Go To Left"
                onPress={() => {
                    navigation.navigate('Left');
                }}
            />
            <Button
                title="Go To FlatListPage"
                onPress={() => {
                    navigation.navigate('FlatListPage');
                }}
            />
            <Button
                title="Go To SwipeableFlatListPage"
                onPress={() => {
                    navigation.navigate('SwipeableFlatListPage');
                }}
            />
            <Button
                title="Go To SectionListPage"
                onPress={() => {
                    navigation.navigate('SectionListPage');
                }}
            />
            <Button
                title="Go To FetchDemoPage"
                onPress={() => {
                    navigation.navigate('FetchDemoPage');
                }}
            />
            <Button
                title="Go To AsyncStorageDemoPage"
                onPress={() => {
                    navigation.navigate('AsyncStorageDemoPage');
                }}
            />
            <Button
                title="Go To DataStoreDemoPage"
                onPress={() => {
                    navigation.navigate('DataStoreDemoPage');
                }}
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

