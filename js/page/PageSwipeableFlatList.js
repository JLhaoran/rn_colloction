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
    RefreshControl,
    ActivityIndicator,
    FlatList,
    TouchableHighlight,
    Text,
} from 'react-native';
const CITY_NAMES = ['北京', '上海', '广州', '深圳', '杭州', '苏州', '成都', '武汉', '郑州', '洛阳', '厦门', '青岛', '拉萨'];


export default class SwipeableFlatListPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataArray: CITY_NAMES,
            isLoading: false
        }
    }
    render() {
        return (
            <FlatList
                data={this.state.dataArray}
                renderItem = {this._renderItem}
            //    refreshing={this.state.isLoading}
            //    onRefresh={() => {
            //    this.loadData();
            //}}
                // 自定义下拉刷新样式
                refreshControl={
                    <RefreshControl
                        title='Loading...'
                        colors={['red']}
                        refreshing={this.state.isLoading}
                        onRefresh={() => this.loadData(true)}
                        tintColor={'orange'}
                    />
                }
                // 上拉加载更多
                ListFooterComponent={() => this.genIndicator()}
                onEndReached={() => {
                    this.loadData()
                }}


            />

        );
    }

   //正在加载更多
    genIndicator() {
        return(
        <View style={styles.indicatorContainer}>
        <ActivityIndicator
        style={styles.indicator}
        size={'large'}
        color={'red'}
        animating={true}/>
            <Text>正在加载更多</Text>
        </View>
        );
    }
    // 渲染列表项
    _renderItem = ({index, item}) => {
        console.log(index);
        return (
            <View key={item.key} style={styles.item}>
                <Text style={styles.text}>{item}</Text>
            </View>
        );
    }

    loadData(refresh) {

        if (refresh) {
            this.setState({
                isLoading: true
            });
        }

        setTimeout(() => {
            let dataArray = [];
            if (refresh) { //上拉刷新
            for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
                    dataArray.push(this.state.dataArray[i])}
            }else{ //上拉加载更多
                dataArray = this.state.dataArray.concat(CITY_NAMES);
            }
            this.setState({
                dataArray:dataArray,
                isLoading: false,
            });
        }, 2000);
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#aeffb1',
        height: 100,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,//漂浮的效果
        borderRadius: 5,//圆角
    },
    text: {
        color: '#444444',
        fontSize: 20,
    },
    indicatorContainer: {
        alignItems: "center",
    },
    indicator: {
        color: 'red',
        margin: 10
    }
});