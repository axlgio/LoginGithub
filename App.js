import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View , Div} from 'react-native';
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import * as React from "react";
import GoogleLogin from './login/googleLogin';
import FacebookLogin from './login/facebookLogin';
import GithubLogin from './login/githubLogin';

export default function App() {


  return (
    <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <View style={ styles.boton}>
          <GoogleLogin/>
        </View>
        <View style={ styles.boton}>
          <FacebookLogin/>
        </View>
        <View style={ styles.boton}>
          <GithubLogin
          
          />
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
});


