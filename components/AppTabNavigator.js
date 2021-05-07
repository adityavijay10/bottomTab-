import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';


export const AppTabNavigator = createBottomTabNavigator({
    Facebook : {
      screen: Facebook,
      navigationOptions :{
        tabBarLabel : "Facebook",
      }
    },
    BookRequest: {
      screen: Instagram,
      navigationOptions :{
        tabBarLabel : "Instagram",
      }
    }
  });

