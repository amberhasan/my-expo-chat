import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import UserItem from "../components/UserItem";
import { getDatabase, ref, onValue } from "firebase/database";

const Users = (props) => {
  let [userList, setUserList] = useState([]);

  const transformData = (data) =>
    Object.keys(data).map((key) => ({ ...data[key], uid: key }));

  useEffect(() => {
    // get data from db
    const db = getDatabase();
    const userRef = ref(db, "users/");
    onValue(userRef, (snapshot) => {
      let data = snapshot.val();
      // transform data
      // set it to state
      if (data != null || data != undefined) {
        setUserList(transformData(data));
      }
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={userList}
        renderItem={({ item }) => (
          <UserItem
            data={item}
            onPress={() => {
              props.navigation.navigate("Chat", {
                user: item,
              });
            }}
          />
        )}
      />
    </View>
  );
};

export default Users;
