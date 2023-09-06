import { Button, View } from 'react-native';
import * as React from "react";
import * as Google from 'expo-auth-session/providers/google';
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLogin() {

    // Declaracion de los enlacess para Login
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: '714233856032-brb51puelasaecl8n7kv5iiu0g7foelm.apps.googleusercontent.com'
      });

    // Declaracion de la URL para redireccionar a la aplicacion
    const redirect =  makeRedirectUri({
        native: true,
        scheme: 'exp',
        path: 'home/code',
        preferLocalhost: true,
        isTripleSlashed: true,
    });

    // Espera a que el response cambie de Null a Objeto Y llama a la funcion handleResponse()
    React.useEffect(() => {
        handleResponse();
    }, [response]);

    async function handleResponse() {
        if (response?.type === "success") {
            const { code } = response.params;
            /// Obtiene el token de respuesta al login 
            console.log(`REPONSE CODE = ${code}`);
        }
    }

    return (
        <View>
            <Button 
                title='LOGIN WIT GOOGLE' 
                onPress={ async ()=> {
                    await promptAsync({ windowName: "Code" });
                }}
            />
        </View>
    );
  }
  