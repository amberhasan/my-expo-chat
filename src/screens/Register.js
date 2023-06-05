import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const auth = getAuth();

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function writeUserData(userId, email, password) {
    const db = getDatabase();
    set(ref(db, "users/" + userId), {
      email,
      password,
    });
  }

  const onRegisterPress = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      writeUserData(user.uid, email, password);
      console.log("Here is the user " + user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Here is the error " + error);
    }
    console.log("Register Press");
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
      {/* <View style={{ height: 50, alignSelf: "stretch" }}>
        <MyTextInput
          placeholder="Enter your name"
          onChangeText={(text) => {
            setEmail(text);
          }}
          secureTextEntry={false}
        />
      </View> */}
      <View style={{ height: 50, alignSelf: "stretch", marginTop: 15 }}>
        <MyTextInput
          placeholder="Enter your email"
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
        <MyButton title="Register" onPress={onRegisterPress} />
      </View>
    </View>
  );
};

export default Register;
