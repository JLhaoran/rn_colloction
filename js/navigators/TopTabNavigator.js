/**
 * Created by mac on 2019/12/3.
 */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Page1 from  '../page/Page1';
import Page3 from  '../page/Page3';
import Page4 from  '../page/Page4';

import Ionicons from 'react-native-vector-icons/Ionicons';

export const AppTopTabNavigator = createMaterialTopTabNavigator({//在这里配置页面的路由
        Page1: {
            screen: Page1,
            navigationOptions: {
                tabBarLabel: 'Page10',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-home'}
                        size={26}
                    />
                ),
            }
        },
        Page4: {
            screen: Page4,
            navigationOptions: {
                tabBarLabel: 'Page2',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-people'}
                        size={26}
                    />
                ),
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: {
                tabBarLabel: 'Page3',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-chatboxes'}
                        size={26}
                    />
                ),
            }
        },
    },
    {
        tabBarOptions: {
            tabStyle: {
                minWidth: 50
            },
            upperCaseLabel: false,//是否使标签大写，默认为true
            scrollEnabled: true,//是否支持 选项卡滚动，默认false
            // activeTintColor: 'white',//label和icon的前景色 活跃状态下（选中）
            // inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
            style: {
                backgroundColor: '#678',//TabBar 的背景颜色
            },
            indicatorStyle: {
                height: 2,
                backgroundColor: 'white',
            },//标签指示器的样式
            labelStyle: {
                fontSize: 13,
                marginTop: 6,
                marginBottom: 6,
            },//文字的样式
        },
    }
);