import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Header from "./components/header/header";
import TodoItems from "./components/items/todoItems";
import AddItem from "./components/items/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const handlePressed = (key) => {
    setTodos((thisTodos) => {
      return thisTodos.filter((item) => item.key != key);
    });
    console.log(key);
  };

  const returnAll = () => {
    setTodos([
      { text: "buy coffee", key: "1" },
      { text: "create an app", key: "2" },
      { text: "play on the switch", key: "3" },
    ]);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddItem />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItems item={item} handlePressed={handlePressed} />
            )}
          />
        </View>
        <View style={styles.returnView}>
          <TouchableOpacity onPress={() => returnAll()}>
            <Text style={styles.returnButton}> Return the list </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#85DCBA",
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  txtNameStyle: {
    color: "#85DCBA",
    fontSize: 16,
  },
  txtEmailStyle: {
    color: "#85DCBA",
  },

  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },

  container: {
    backgroundColor: "black",
    marginTop: 50,
  },

  list: {
    paddingHorizontal: 20,
  },

  returnView: {
    paddingHorizontal: 100,
  },
  returnButton: {
    padding: 20,
    color: "#85DCBA",
    borderColor: "#85DCBA",
    borderWidth: 1,
    borderRadius: 20,
    borderStyle: "dashed",
    textAlign: "center",
    marginTop: 20,
  },
});
