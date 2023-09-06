import { useState, useEffect } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();


const FacebookLoginScreen = () => {
    const [user, setUser] = useState(null);
    const [request, response, promptAsync] = Facebook.useAuthRequest({
      clientId: "726576839482978",
    });
  
    useEffect(() => {
      if (response && response.type === "success" && response.authentication) {
        (async () => {
          const userInfoResponse = await fetch(
            `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`
          );
          const userInfo = await userInfoResponse.json();
          setUser(userInfo);
          console.log(JSON.stringify(response, null, 2));
        })();
      }
    }, [response]);
  
    const handlePressAsync = async () => {
      const result = await promptAsync();
      if (result.type !== "success") {
        alert("Ha ocurrido un problema");
        return;
      }
    };

    return (
        <View>
          {user ? (
            <Profile user={user} />
          ) : (
            <Button
              disabled={!request}
              title="Iniciar Sesión con Facebook"
              onPress={handlePressAsync}
            />
          )}
        </View>
      );
  
};

export default FacebookLoginScreen;

