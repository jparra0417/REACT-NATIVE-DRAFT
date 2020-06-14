/** expo install @react-navigation/drawer @expo/vector-icons*/
import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { FontAwesome5, Feather } from "@expo/vector-icons";
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

/** custom */
const CustomNavigator = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        icon={(props) => (
          <Feather name="help-circle" size={props.size} color="#A36267" />
        )}
        onPress={() => alert("Link to help")}
      />
    </DrawerContentScrollView>
  );
};

/** navigation */
const DrawerNavigation = () => {
//   const dimensions = useWindowDimensions();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"        
        drawerStyle={{
          backgroundColor: "#c6cbef",
          width: 240,
        }}
        drawerContent={(props) => <CustomNavigator {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({ focused: boolean, color: string, size: number }) => (
              <Feather name="home" size={16} color="#23A267" />
            ),
            title: "Welcome",
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({ focused: boolean, color: string, size: number }) => (
              <Feather name="user" size={16} color="#23A267" />
            ),
            title: "Profile",
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            drawerIcon: ({ focused: boolean, color: string, size: number }) => (
              <Feather name="settings" size={16} color="#23A267" />
            ),
            title: "Settings",
          }}
        />
        <Drawer.Screen
          name="Bills"
          component={BillsScreen}
          options={{
            drawerIcon: ({ focused: boolean, color: string, size: number }) => (
              <Feather name="dollar-sign" size={16} color="#23A267" />
            ),
            title: "Bills",
          }}
        />
        <Drawer.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            drawerIcon: ({ focused: boolean, color: string, size: number }) => (
              <Feather name="list" size={16} color="#23A267" />
            ),
            title: "Details",
          }}
        />
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
