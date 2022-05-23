import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
export default function TodoItems({ item, handlePressed }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => handlePressed(item.key)}>
        <MaterialIcons name="delete" size={18} color="#85DCBA" />
      </TouchableOpacity>
      <Text style={styles.hightext}>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hightext: {
    marginLeft: 10,
    color: "#85DCBA",
    fontSize: 18,
  },
  item: {
    flexDirection: "row",
    marginTop: 24,
    padding: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#85DCBA",
    borderStyle: "solid",
  },
});
