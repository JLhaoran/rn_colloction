/**
 * Created by mac on 2019/12/3.
 */
import React from 'react';
import {Platform} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator,BottomTabBar} from 'react-navigation-tabs';
import Page1 from  '../page/Page1';
import Page2 from  '../page/Page2';
import Page3 from  '../page/Page3';

import Ionicons from 'react-native-vector-icons/Ionicons';

const TabBarComponent = (props) => (<BottomTabBar {...props} />);

export const AppBottomTabNavigator = createBottomTabNavigator({
    Page1: {
        screen: Page1,
        navigationOptions: {
            tabBarLabel: 'Page1',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'ios-home' : 'ios-home'}
                    size={26}
                />
            ),
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: 'Page2',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'ios-apps' : 'ios-apps'}
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
                    name={focused ? 'ios-chatboxes' : 'ios-chatboxes'}
                    size={26}
                />
            ),
        }
    },
}, {
    tabBarComponent: TabBarComponent,
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    }
});