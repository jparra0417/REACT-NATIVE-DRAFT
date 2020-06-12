/** expo install react-native-safe-area-context @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view --save */
/** expo install */
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

/** Home component */
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.buttonRound}>
          <Text style={{ fontSize: 25, fontWeight: "100", color: "#fff" }}>
            ?
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Profile", {
            user: "Julian",
            action: "Conquer",
          });
        }}
      >
        <Text style={{ color: "#fff" }}>Go Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

/** Profile component */
const ProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { user, action }: any = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.buttonRound}>
          <Text style={{ fontSize: 28, fontWeight: "100", color: "#fff" }}>
            ?
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      <Text style={{ fontWeight: "600", marginVertical: 32 }}>
        {user} will {action} the world
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={{ color: "#fff" }}>Go Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {
            borderColor: "#23A6D9",
            borderWidth: 1,
            marginTop: 12,
            backgroundColor: "#fff",
          },
        ]}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={{ color: "#23A6D9" }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();
const CustomHeader = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

/** Main component */
const DraftNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#233278",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "100",
            fontSize: 25,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "Welcome",
          }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DraftNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRound: {
    marginRight: 16,
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: "#FFF",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 32,
    backgroundColor: "#23A6D9",
    paddingVertical: 12,
    width: 250,
    maxWidth: "90%",
    borderRadius: 12,
    alignItems: "center",
  },
  text: {
    fontWeight: "100",
    fontSize: 32,
  },
  home: {
    flex: 1,
    backgroundColor: "#126cab",
    alignItems: "center",
    color: "#fff",
    justifyContent: "center",
  },
  profile: {
    flex: 1,
    backgroundColor: "#9d12ac",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
