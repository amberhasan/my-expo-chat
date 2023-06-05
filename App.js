import app from "./src/firebaseConfig";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Inbox from "./src/screens/Inbox";
import Chat from "./src/screens/Chat";
import Register from "./src/screens/Register";
import Users from "./src/screens/Users";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

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
              <Button
                title="New"
                onPress={() => {
                  props.navigation.navigate("Users");
                }}
              />
            ),
          })}
        />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Users" component={Users} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
