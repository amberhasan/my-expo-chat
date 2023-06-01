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
    if (!email.includes("@") || !email.includes(".com")) {
      alert("Please enter a valid email");
    } else if (password.length < 6) {
      alert("Please enter a password at least length 6");
    } else {
      props.navigation.navigate("Inbox");
    }
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
      <View style={{ height: 50 }}>
        <MyTextInput
          placeholder="Enter your username"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
      </View>
      <View style={{ height: 50 }}>
        <MyTextInput
          placeholder="Enter your password"
          onChangeText={(text) => {
            setPassword(text);
          }}
          // secureTextEntry
          style={{ marginTop: 15 }}
        />
      </View>
      <View style={{ height: 50, alignSelf: "stretch" }}>
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
      </View>
      <View style={{ height: 50, alignSelf: "stretch" }}>
        <MyButton title="Register" onPress={onRegisterPress} />
      </View>
    </View>
  );
};

export default Login;
