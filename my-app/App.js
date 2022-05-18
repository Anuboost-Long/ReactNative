import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import TodoItems from "./components/items/todoItems";
import AddItem from "./components/items/addTodo";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const getUsers = () => {
    setLoading(true);
    axios
      .get(`https://randomuser.me/api/?page=${currentPage}&results=20&seed=abc`)
      .then((res) => {
        // setUsers(res.data.results);
        setUsers([...users, ...res.data.results]);
        console.log(currentPage);
        setLoading(false);
      });
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrapperStyle}>
        <Image
          style={styles.itemImageStyle}
          source={{ uri: item.picture.large }}
        />
        <View style={styles.contentWrapperStyle}>
          <Text style={styles.txtNameStyle}>
            {`${item.name.title}`}
            {`${item.name.first}`}
            {`${item.name.last}`}
          </Text>
          <Text style={styles.txtEmailStyle}>{`${item.email}`}</Text>
        </View>
      </View>
    );
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#85DCBA" />
      </View>
    ) : null;
  };

  // const handlePressed = (key) => {
  //   setTodos((thisTodos) => {
  //     return thisTodos.filter((item) => item.key != key);
  //   });
  //   console.log(key);
  // };

  // const returnAll = () => {
  //   setTodos([
  //     { text: "buy coffee", key: "1" },
  //     { text: "create an app", key: "2" },
  //     { text: "play on the switch", key: "3" },
  //   ]);
  // };
  return (
    <FlatList
      style={styles.container}
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.email}
      ListFooterComponent={renderLoader}
      onEndReached={loadMoreItem}
      onEndReachedThreshold={0}
    />
    // <View style={styles.container}>
    //   <Header />
    //   <View style={styles.content}>
    //     <AddItem />
    //     <View style={styles.list}>
    //       <FlatList
    //         data={todos}
    //         renderItem={({ item }) => (
    //           <TodoItems item={item} handlePressed={handlePressed} />
    //         )}
    //       />
    //     </View>
    //     <View style={styles.returnView}>
    //       <TouchableOpacity onPress={() => returnAll()}>
    //         <Text style={styles.returnButton}> Return the list </Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </View>
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
