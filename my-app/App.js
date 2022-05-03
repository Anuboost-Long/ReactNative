import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [phrase, setPhrase] = useState(
    "Stop right there you are violating the law"
  );
  const [name, setName] = useState("Not Anuboost");
  const [people, setPeople] = useState([
    { name: "Tokita", key: 1 },
    { name: "Baki", key: 2 },
    { name: "Nafumi", key: 3 },
    { name: "Tyson", key: 4 },
    { name: "Anuboost", key: 5 },
    { name: "Tommy", key: 6 },
    { name: "Timmy", key: 7 },
    { name: "Tatsumi", key: 8 },
  ]);

  // const handlelawchange = () => {
  //   if (phrase == "This action is legit") return;
  //   setPhrase("This action is legit !!!");
  //   setName("Anuboost");
  //   if (phrase == "Stop right there you are violating the law") return;
  //   setPhrase("Stop right there you are violating the law");
  //   setName("Not Anuboost");
  // };

  // const handlenamechange = (value) => {
  //   setName(value);
  //   if (value == "Anuboost") setPhrase("This action is legit");
  //   else setPhrase("Stop right there you are violating the law");
  // };
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((person) => {
          return (
            <View key={person.key}>
              <Text style={styles.hightext}>{person.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  hightext: {
    marginTop: 24,
    padding: 30,
    color: "black",
    backgroundColor: "white",
    fontSize: 24,
  },
});
