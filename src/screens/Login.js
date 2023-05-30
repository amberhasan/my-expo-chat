import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = () => {
    // Email valdation
    // Password Validation
    // register the user
    // navigate to home
    console.log("LOgin");
    props.navigation.navigate("Inbox");
  };
  const onRegisterPress = () => {
    props.navigation.navigate("Register");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 25,
      }}
    >
      <MyTextInput
        placeholder="Enter your username"
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <MyTextInput
        placeholder="Enter your password"
        onChangeText={(text) => {
          setPassword(text);
        }}
        style={{ marginTop: 15 }}
      />

      <MyButton
        title="Login"
        onPress={onLoginPress}
        style={{
          backgroundColor: "yellow",
        }}
        textStyle={{
          color: "black",
        }}
      />
      <MyButton title="Register" onPress={onRegisterPress} />
    </View>
  );
};

export default Login;
