import React,{Component} from 'react';
import {View, Text} from 'react-native';

import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-elements';

import Profile from './Profile';

import Cart from './Cart;'

export default class Home extends Component 
{
    render()
    {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:40}}>CST home Screen</Text>
            </View>
        );
    }
}

const TabNavigator=createMaterialBottomTabNavigator(
    {
        Home :{screen:Home, 
            navigationOptions:{
                tabBarLabel: 'Home',
                activeColor: '#ff0000',
                inactiveColor: '000000',
                barStyle:{backgroundColor: '#67baf6'},
                tabBarIcon:()=>(
                    <View>
                        <Icon name={'Home'} size={25} style={{color:'#ff0000'}}/>
                    </View>
                )
            }
        },
        Profile :{screen:Profile, 
            navigationOptions:{
                tabBarLabel: 'Profile',
                activeColor: '#ff0000',
                inactiveColor: '000000',
                barStyle:{backgroundColor: '#67baf6'},
                tabBarIcon:()=>(
                    <View>
                        <Icon name={'Person'} size={25} style={{color:'#ff0000'}}/>
                    </View>
                )
            }
        },
        Cart :{screen:Cart, 
            navigationOptions:{
                tabBarLabel: 'Cart',
                activeColor: '#ff0000',
                inactiveColor: '000000',
                barStyle:{backgroundColor: '#67baf6'},
                tabBarIcon:()=>(
                    <View>
                        <Icon name={'add-shopping-cart'} size={25} style={{color:'#ff0000'}}/>
                    </View>
                )
            }
        }

    }
);

export default createAppContainer(TabNavigator);