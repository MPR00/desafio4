import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import Feed from './src/pages/Feed';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, createAppContainer } from '@react-navigation/native'

import camera from './assets/camera.png';
import logo from './assets/logo.png';
import igtv from './assets/igtv.png';
import send from './assets/send.png';

const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Feed">
          <Stack.Screen
            name="asd"
            component={Feed}
            options={{
              headerTitle:
                <>
                  <TouchableOpacity style={style.camera}>
                    <Image source={camera} />
                  </TouchableOpacity>

                  <View style={style.logo}>
                    <Image source={logo} />
                  </View>

                  <TouchableOpacity style={style.igtv}>
                    <Image source={igtv} />
                  </TouchableOpacity>

                  <TouchableOpacity style={style.enviar}>
                    <Image source={send} />
                  </TouchableOpacity>
                </>,
              headerStyle: { height: 100 },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    logo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
      paddingLeft: 130,
      paddingRight: 70
    },
    camera: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
      paddingBottom: 8
    },
    igtv: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
      paddingBottom: 8,
      paddingRight: 15
    },
    enviar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
      paddingBottom: 8,
      paddingRight: 15
    }
  }
)
