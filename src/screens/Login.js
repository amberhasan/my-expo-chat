import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import MyButton from "../components/MyButton";

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
      <TextInput
        placeholder="Enter your email"
        onChangeText={(text) => {
          setEmail(text);
        }}
        style={{
          height: 40,
          width: "100%",
          borderWidth: 0.5,
          paddingHorizontal: 10, //applied to all 4 sides
          borderRadius: 15,
        }}
      />
      <TextInput
        placeholder="Enter your password"
        onChangeText={(text) => {
          setPassword(text);
        }}
        style={{
          height: 40,
          width: "100%",
          borderWidth: 0.5,
          paddingHorizontal: 10, //applied to all 4 sides
          borderRadius: 15,
          marginTop: 15,
        }}
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
