import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { createMaterialBottomTabNavigator  } from '@react-navigation/material-bottom-tabs';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  StyleSheet,
  Text,
  View,
  Pressable,

} from 'react-native';


// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator

        screenOptions={({ route }) => ({

          tabBarActiveTintColor: '#1291db',
          tabBarInactiveTintColor: '#d30dde',
          tabBarActiveBackgroundColor: '#799aed',
          tabBarInactiveBackgroundColor: '#addaed',
          showLabel: true,
          tabBarLabelStyle: { fontSize: 14 },
         
          


          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'adn';
              size = focused ? 25 : 20;
            }
            else if (route.name === 'Screen_B') {
              iconName = 'btc';
              size = focused ? 25 : 20;

            }

            return (
              <FontAwesome5
                name={iconName}
                size={size}

              />
            )

          }

        })}

        activeColor = '#e68b0b'
        inactiveColor='#76078a'
        barStyle = {{backgroundColor:'#dde38a'}}

      // tabBarOptions = {{

      //   activeTintColor: '#f0f',
      //   inactiveTintColor: '#f00f',
      //   activeBackgroundColor: '#f0f',
      //   inactiveBackgroundColor: '#f00f',
      //   // showLabel: false


      // }}

      >
        <Tab.Screen
          name='Screen_A'
          component={ScreenA}
          // options={{ tabBarBadge: 'A' }}

        />

        <Tab.Screen
          name='Screen_B'
          component={ScreenB}

        />
      </Tab.Navigator>

    </NavigationContainer>

  )
}

