import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

export default function AddItem({ handleCreateTask }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <Text style={styles.label}> Add Item </Text>
      <TextInput
        style={styles.inputfield}
        placeholder="add todo item...."
        placeholderTextColor={"white"}
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => handleCreateTask(text)}
        title="Create Task"
        color="#85DCBA"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginTop: 24,
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  inputfield: {
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#85DCBA",
    color: "#85DCBA",
  },
});
