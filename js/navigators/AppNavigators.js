import React from 'react';
import { Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {AppBottomTabNavigator} from './BottomTabNavigator';
import {AppTopTabNavigator} from './TopTabNavigator';
import {SwitchNavigator} from './SwitchNavigator';
import {DrawerNav} from './DrawerNavigator';

import Page1 from  '../page/Page1';
import Page2 from  '../page/Page2';
import Page3 from  '../page/Page3';
import Page4 from  '../page/Page4';
import FlatListPage from  '../page/PageFlatList';
import SwipeableFlatListPage from  '../page/PageSwipeableFlatList';
import SectionListPage from  '../page/PageSectionList';
import HomePage from  '../page/HomePage';
import FetchDemoPage from  '../page/FetchDemoPage';
import AsyncStorageDemoPage from  '../page/AsyncStorageDemoPage';
import DataStoreDemoPage from  '../page/DataStoreDemoPage';



export const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
    },
    Page1: {
        screen: Page1,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}页面名A`//动态设置navigationOptions
        })
    },
    Page2: {
        screen: Page2,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "This is Page2.",
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: (props) => {//在这里定义每个页面的导航属性，动态配置
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = state;
            return {
                title: params.title ? params.title : 'This is Page3',
                headerRight: (
                    <Button
                        title={params.mode === 'edit' ? '保存' : '编辑'}
                        onPress={() =>
                            setParams({mode: params.mode === 'edit' ? '' : 'edit'})}
                    />
                ),
            }
        }
    },
    Page4: {
        screen: Page4,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "This is Page4",
        }
    },
    Bottom:{
        screen: AppBottomTabNavigator,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "BottomTabNavigator",
        }
    },
    Top:{
        screen: AppTopTabNavigator,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "AppTopTabNavigator",
        }
    },
    Login:{
        screen: SwitchNavigator,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "SwitchNavigator",
        }
    },
    Left:{
        screen: DrawerNav,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "DrawerNav",
        }
    },
    FlatListPage: {
        screen: FlatListPage,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "This is FlatListPage.",
        }
    },
    SwipeableFlatListPage: {
        screen: SwipeableFlatListPage,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "This is SwipeableFlatListPage",
        }
    },
    SectionListPage: {
        screen: SectionListPage,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "This is SectionListPage",
        }
    },
    FetchDemoPage: {
        screen: FetchDemoPage,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "This is FetchDemoPage",
        }
    },
    AsyncStorageDemoPage: {
        screen: AsyncStorageDemoPage,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "This is AsyncStorageDemoPage",
        }
    },
    DataStoreDemoPage: {
        screen: DataStoreDemoPage,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "This is DataStoreDemoPage",
        }
    }
}, {
    defaultNavigationOptions: {
        // header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    }
});




