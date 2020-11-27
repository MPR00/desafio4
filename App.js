import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import Feed from './src/pages/Feed';
import Login from './src/pages/Login';
import Curtidas from './src/pages/Likes';
import Comentários from './src/pages/Comment';
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
            name="Feed"
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

          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerStyle: { height: 100 },
              headerTitleAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              headerTintColor: '#000'
            }}
          />

          <Stack.Screen
            name="Curtidas"
            component={Curtidas}
            options={{
              headerStyle: { height: 100 },
              headerTitleAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              headerTintColor: '#000'
            }}
          />

          <Stack.Screen
            name="Comentários"
            component={Comentários}
            options={{
              headerStyle: { height: 100 },
              headerTitleAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              headerTintColor: '#000'
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
      backgroundColor: '#fff',
      width: '100%'
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
