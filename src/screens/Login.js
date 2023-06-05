import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const Login = (props) => {
  const [email, setEmail] = useState("amber.hasan@gmail.comm");
  const [password, setPassword] = useState("password");

  const onLoginPress = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Here is the user " + JSON.stringify(user));
      props.navigation.navigate("Inbox");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("We got an error " + error);
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
      <View style={{ height: 50, alignSelf: "stretch" }}>
        <MyTextInput
          placeholder="Enter your username"
          onChangeText={(text) => {
            setEmail(text);
          }}
          secureTextEntry={false}
        />
      </View>
      <View style={{ height: 50, alignSelf: "stretch", marginTop: 15 }}>
        <MyTextInput
          placeholder="Enter your password"
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry={true}
        />
      </View>
      <View style={{ height: 70, alignSelf: "stretch" }}>
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
      <View style={{ height: 70, alignSelf: "stretch" }}>
        <MyButton title="Register" onPress={onRegisterPress} />
      </View>
    </View>
  );
};

export default Login;
