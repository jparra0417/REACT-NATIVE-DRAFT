import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";

const AsyncComponent = () => {
  const [name, setname] = useState<string>("");

  const handleName = (text: string) => {
    setname(text);
  };

    useEffect(() => {
      loadName();
    }, []);

  const saveName = async () => {
    try {
      await AsyncStorage.setItem("name", name);
    } catch (error) {
      console.log("error ", error);
    }
  };

  const loadName = async () => {
    try {
      let text = await AsyncStorage.getItem("name");
      if (text) setname(text);
    } catch (error) {
      console.log("error ", error);
    }
  };

  const removeName = async () => {
    try {
      let text = await AsyncStorage.removeItem("name");
    } catch (error) {
      console.log("error ", error);
    } finally {
      setname("");
    }
  };

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.name}>What's your name?</Text>
        <Text>{name}</Text>
        <TextInput style={styles.input} onChangeText={handleName} placeholder='Your name' />
        <TouchableOpacity style={styles.button} onPress={() => saveName()}>
          <Text style={{ color: "white" }}>Save my name</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.remove} onPress={() => removeName()}>
          <Text style={{ color: "white" }}>Remove my name</Text>
        </TouchableOpacity>
      </SafeAreaView>
  );
};

export default AsyncComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  name: {
    fontSize: 24,
    fontWeight: "300",
  },
  input: {
    borderWidth: 2,
    borderColor: "#575dd9",
    alignItems: "stretch",
    marginTop: 32,
    paddingHorizontal: 12,
    height: 64,
    borderRadius: 6,
    fontSize: 24,
    fontWeight: "300",
  },
  button: {
    backgroundColor: "#575DD9",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingVertical: 12,
    marginTop: 32,
    marginHorizontal: 32,
    borderRadius: 6,
  },
  remove: {
    backgroundColor: "#AC3223",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingVertical: 12,
    marginTop: 32,
    marginHorizontal: 32,
    borderRadius: 6,
  },
});
