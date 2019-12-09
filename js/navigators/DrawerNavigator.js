/**
 * Created by mac on 2019/12/3.
 */
import React from 'react';
import { ScrollView } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { DrawerItems } from 'react-navigation-drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Page4 from  '../page/Page4';
import Page5 from  '../page/Page5';

export const DrawerNav = createDrawerNavigator({
        Page4: {
            screen: Page4,
            navigationOptions: {
                drawerLabel: 'Page4',
                drawerIcon: ({tintColor}) => (
                    <MaterialIcons name="drafts" size={24} />
                ),
            }
        },
        Page5: {
            screen: Page5,
            navigationOptions: {
                drawerLabel: 'Page5',
                drawerIcon: ({tintColor}) => (
                    <MaterialIcons
                        name="move-to-inbox"
                        size={24}
                    />
                ),
            }
        },
    },
    {
        initialRouteName: 'Page4',
        contentOptions: {
            activeTintColor: '#e91e63',
        },
        contentComponent: (props) => (
            <ScrollView
             style = {{background:'#789',flex:1}}
            >
                    <DrawerItems {...props} />
            </ScrollView>
        )
    }
);

