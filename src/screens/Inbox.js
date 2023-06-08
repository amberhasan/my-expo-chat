import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import InboxItem from "../components/InboxItem";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

const Inbox = (props) => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const [userList, setUserList] = useState([]);

  const transformUserData = (data) => {
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
    const database = getDatabase();
    const usersRef = ref(database, "users/");
    onValue(usersRef, (snapshot) => {
      const userData = snapshot.val();
      const transformedData = transformUserData(userData);
      if (transformedData != null || transformedData != undefined) {
        setUserList(transformedData);
      }
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {userList.length === 0 ? (
        <Text>No chats</Text>
      ) : (
        <FlatList
          data={userList}
          renderItem={({ item }) => (
            <InboxItem
              user={item}
              email={item.email}
              onPress={() => {
                props.navigation.navigate("Chat", {
                  user: item,
                });
              }}
            />
          )}
        />
      )}
    </View>
  );
};

export default Inbox;
