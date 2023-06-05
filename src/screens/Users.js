import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import UserItem from "../components/UserItem";
import { getDatabase, ref, onValue } from "firebase/database";

const Users = (props) => {
  let [userList, setUserList] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, "users/");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      console.log("------data", data);
      userList.push(data);
      setUserList([data]);
      console.log("userList", userList);
    });
  }, []);

  //Transform the data to have the UID inside the object.
  userList = userList.map((obj) => {
    const uid = Object.keys(obj)[0];
    const innerObject = obj[uid];
    return { uid, ...innerObject };
  });

  console.log("updated userList", userList);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={userList}
        renderItem={({ item }) => <UserItem data={item} />}
      />
    </View>
  );
};

export default Users;
