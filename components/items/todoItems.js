import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
export default function TodoItems({ item, handlePressed }) {
  return (
    <TouchableOpacity onPress={() => handlePressed(item.key)}>
      <Text style={styles.hightext}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  hightext: {
    marginTop: 24,
    padding: 30,
    color: "#85DCBA",
    borderColor: "#85DCBA",
    borderStyle: "solid",
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 24,
  },
});
