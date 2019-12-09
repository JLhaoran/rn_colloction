/**
 * Created by mac on 2019/12/5.
 */
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
    FlatList,
    SectionList,
    RefreshControl,
    ActivityIndicator,
    TouchableHighlight,
    Text,
} from 'react-native';
const NEW_CITY_NAMES = [
{ title: "一线", data: ['北京', '上海', '广州', '深圳'] },
{ title: "二线", data: ['杭州', '苏州', '成都', '武汉', '郑州'] },
{ title: "三四线", data: ['洛阳', '厦门', '青岛', '拉萨'] }
];

export default class SectionListPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataArray: NEW_CITY_NAMES,
            isLoading: false
        }
    }
    render() {
        return (
            <SectionList
                renderItem={this._renderItem}
                renderSectionHeader={this._renderSectionHeader}
                sections={this.state.dataArray}
                keyExtractor={(item, index) => item + index}
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
                dataArray = this.state.dataArray.concat(NEW_CITY_NAMES);
            }
            this.setState({
                dataArray:dataArray,
                isLoading: false,
            });
        }, 2000);
    }

    _renderSectionHeader({ section: { title } }){
        return(
        <View style={styles.sectionHeader}>
         <Text style={{fontSize: 20,fontWeight: "bold" }}>{title}</Text>
        </View>
        );
    }
    _renderItem = ({item, index, section}) => {
        return (
            <TouchableHighlight onPress={() => this._onPress(index, item)}>
            <View key={index} style={styles.item}>
                <Text style={styles.text}>{item}</Text>
            </View>
            </TouchableHighlight>
        );
    }

    _onPress(index, item){
        console.log(">>>>index="+index+"---7788--"+ this.state.dataArray.length);
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#aeffb1',
        height: 80,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,//漂浮的效果
        borderRadius: 5,//圆角
    },
    text: {
        color: '#444444',
        fontSize: 20,
    },
    sectionHeader:{
        height:50,
        backgroundColor:"#DAA520",
        alignItems:'center',
        justifyContent:'center'
    },
    indicatorContainer: {
        alignItems: "center",
    },
    indicator: {
        color: 'red',
        margin: 10
    }
});