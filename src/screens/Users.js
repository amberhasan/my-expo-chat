import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import UserItem from "../components/UserItem";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

const Users = (props) => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const [userList, setUserList] = useState([]);

  const transformData = (data) => {
    return Object.keys(data)
      .map((key) => {
        const userData = data[key];
        if (userData && key !== currentUser.uid) {
          return { ...userData, uid: key };
        }
      })
      .filter(Boolean);
  };

  useEffect(() => {
    // get data from db
    const db = getDatabase();
    const userRef = ref(db, "users/");
    onValue(userRef, (snapshot) => {
      let data = snapshot.val();
      // transform data
      data = transformData(data);

      // set it to state
      if (data != null || data != undefined) {
        setUserList(data);
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
