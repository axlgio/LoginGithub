import { Button, View } from 'react-native';
import * as React from "react";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";

export default function GithubLogin() {

    // Declaracion de los enlacess para Login
    const discovery = {
        authorizationEndpoint: "https://github.com/login/oauth/authorize"
    };

    // Declaracion de la URL para redireccionar a la aplicacion
    const redirect =  makeRedirectUri({
        native: true,
        scheme: 'exp',
        path: 'home/code',
        preferLocalhost: true,
        isTripleSlashed: true,
    });

    // Obtener el request el response y el metodo que habre el Login con Firebase
    const [request, response, promptAsync] = useAuthRequest(
        {
        // Client ID
        clientId: process.env.EXPO_PUBLIC_GITHUB_CLIENT_ID,
        // Informacion que quieres resivir de la vinculacion con firebase
        scopes: ["user:email"],
        // agrega la URL para redirecionar
        redirectUri: redirect,
        },
        // agrega las URL de Login
        discovery
    );

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
                title='Iniciar Sesión con Github' 
                onPress={ async ()=> {
                    await promptAsync({ windowName: "Code" });
                }}
            />
        </View>
    );
  }
