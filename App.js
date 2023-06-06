import app from "./src/firebaseConfig";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Inbox from "./src/screens/Inbox";
import Chat from "./src/screens/Chat";
import Register from "./src/screens/Register";
import Users from "./src/screens/Users";
import { View, Button } from "react-native";
import { getAuth, signOut } from "firebase/auth";

const Stack = createNativeStackNavigator();
const auth = getAuth();

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="Inbox"
          component={Inbox}
          options={(props) => ({
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: 10 }}>
                  <Button
                    title="Log out"
                    onPress={() => {
                      signOut(auth).then(() => {
                        console.log("Signed out successfully");
                        props.navigation.navigate("Login");
                      });
                    }}
                  />
                </View>
                <View>
                  <Button
                    title="New"
                    onPress={() => {
                      props.navigation.navigate("Users");
                    }}
                  />
                </View>
              </View>
            ),
          })}
        />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Users" component={Users} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
