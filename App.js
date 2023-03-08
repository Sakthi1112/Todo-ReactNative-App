import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Header from "./Header";
import ToolItem from "./ToolItem";
import AddTodo from "./AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "To reach Theater at 11:30AM", key: "1" },
    { text: "Get into the Car at 2PM", key: "2" },
    { text: "play Spotify at Car", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.key != key);
    });
  };
  const submitHandler = (text) => {
    if (text.length > 0) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Sorry!", "Please,Enter some Todo to Add!", [
        {
          text: "Cancel",
        },
      ]);
    }
  };

  return (
    
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
    <View style={styles.container}>
      {/* {header} */}
      <Header />
      <View style={styles.content}>
        {/* {form} */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <ToolItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
