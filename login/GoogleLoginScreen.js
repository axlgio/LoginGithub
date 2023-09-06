import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLoginScreen() {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "",
    iosClientId: "558666038307-luhca4ev2mlfu56c1dim9jtkq7guddnr.apps.googleusercontent.com",
    webClientId: "558666038307-c0la950ro8obvjphboume4tn8ve2s1bb.apps.googleusercontent.com",
  });

  useEffect(() => {
    handleEffect();
  }, [response, token]);

  async function handleEffect() {
    const user = await getLocalUser();
    console.log("user", user);
    if (!user) {
      if (response?.type === "success") {
        getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(user);
      console.log("loaded locally");
    }
  }

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
    }
  };

  return (
    <View>
      {!userInfo ? (
        <Button
          title="Iniciar Sesión con Google"
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        />
      ) : (
        <View>
          {userInfo?.picture && (
            <Image source={{ uri: userInfo?.picture }} style={styles.image} />
          )}
          <Text>Email: {userInfo.email}</Text>
          <Text>
            Verified: {userInfo.verified_email ? "yes" : "no"}
          </Text>
          <Text>Name: {userInfo.name}</Text>
        </View>
      )}
    </View>
  );
}

  