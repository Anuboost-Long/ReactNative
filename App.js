import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
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

  const handleCreateTask = (task) => {
    if (task.length > 3) {
      setTodos((prevTodo) => {
        return [{ text: task, key: Math.random().toString() }, ...prevTodo];
      });
    } else {
      Alert.alert(
        "Invalid",
        "Your to do list is too short, 3 character or above",
        [{ text: "Aight !!", onPress: () => console.log("Yamete Kudasai!") }]
      );
    }
  };

  const handlePressed = (key) => {
    setTodos((thisTodos) => {
      return thisTodos.filter((item) => item.key != key);
    });
  };

  const returnAll = () => {
    setTodos([
      { text: "buy coffee", key: "1" },
      { text: "create an app", key: "2" },
      { text: "play on the switch", key: "3" },
    ]);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddItem handleCreateTask={handleCreateTask} />
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  content: {
    padding: 20,
    flex: 1,
  },

  list: {
    flex: 1,
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
