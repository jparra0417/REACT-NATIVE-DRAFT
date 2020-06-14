/** expo install @react-navigation/drawer @expo/vector-icons*/
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

const Screen = (props: any) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ alignItems: "flex-end", margin: 16 }}
          onPress={props.navigation.openDrawer}
        >
          <FontAwesome5 name="bars" size={24} color="#161924" />
        </TouchableOpacity>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={styles.text}>{props.name} Screen</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};
const HomeScreen = (props: any) => (
  <Screen name="Home" navigation={props.navigation} />
);
const ProfileScreen = (props: any) => (
  <Screen name="Profile" navigation={props.navigation} />
);
const SettingsScreen = (props: any) => (
  <Screen name="Settings" navigation={props.navigation} />
);
const BillsScreen = (props: any) => (
  <Screen name="Bills" navigation={props.navigation} />
);
const DetailsScreen = (props: any) => (
  <Screen name="Details" navigation={props.navigation} />
);

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Bills" component={BillsScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default DrawerNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "#161924",
    fontSize: 20,
    fontWeight: "600",
  },
});
