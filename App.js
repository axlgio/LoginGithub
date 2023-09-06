import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View , Div} from 'react-native';
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import * as React from "react";
import GoogleLoginScreen from './login/GoogleLoginScreen';
import FacebookLoginScreen from './login/FacebookLoginScreen';
import GithubLogin from './login/GithubLogin'

export default function App() {

  return (
    <View style={styles.container}>
        <View style={styles.boton}>
          <GoogleLoginScreen style={styles.boton1}/>
        </View>
        <View style={styles.boton}>
          <FacebookLoginScreen style={styles.boton2}/>
        </View>
        <View style={styles.boton}>
          <GithubLogin style={styles.boton3}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton:{
    margin:20,
  },
  boton1:{
    margin:20,
    color:"red"
  },
  boton2:{
    margin:20,
    color:"blue"
  },
  boton3:{
    margin:20,
    color:"black"
  },
});


