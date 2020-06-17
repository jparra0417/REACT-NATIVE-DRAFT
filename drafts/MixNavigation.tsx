/** expo install react-native-safe-area-context @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
 * expo install @react-navigation/drawer @expo/vector-icons
 * expo install @react-navigation/bottom-tabs
 */
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const CustomHeader = (props: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        // borderWidth: 1,
        // borderColor: "red",
      }}
    >
      <View
        style={{
          flex: 1,
          // borderColor: "red",
          // borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!props.initial ? (
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <FontAwesome5 name="arrow-left" size={24} color="#161924" />
          </TouchableOpacity>
        ) : null}
      </View>
      <View
        style={{
          flex: 2,
          // borderColor: "red",
          // borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{props.title}</Text>
      </View>
      <View
        style={{
          flex: 1,
          // borderColor: "red",
          // borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
          <FontAwesome5 name="bars" size={24} color="#161924" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HomeScreen = (props: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="Home"
        initial={true}
        navigation={props.navigation}
      ></CustomHeader>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate("HomeDetails")}
        >
          <Text>Go Home details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const HomeScreenDetails = (props: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="Home Details"
        navigation={props.navigation}
      ></CustomHeader>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home Details!</Text>
      </View>
    </SafeAreaView>
  );
};

const SettingsScreen = (props: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="Settings"
        initial={true}
        navigation={props.navigation}
      ></CustomHeader>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate("SettingsDetails")}
        >
          <Text>Go details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const SettingsScreenDetails = (props: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="Settings Details"
        navigation={props.navigation}
      ></CustomHeader>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings details!</Text>
      </View>
    </SafeAreaView>
  );
};

const Tab = createBottomTabNavigator();
const StackHome = createStackNavigator();
const StackSettings = createStackNavigator();
const Drawer = createDrawerNavigator();

// to avoid a second header
const navOptionHandler = () => ({
  headerShown: false,
});

export const HomeStack = () => {
  return (
    <StackHome.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <StackHome.Screen
        name="Home"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="HomeDetails"
        component={HomeScreenDetails}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
};

export const SettingStack = () => {
  return (
    <StackSettings.Navigator
      initialRouteName="Settings"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <StackSettings.Screen
        name="Settings"
        component={SettingsScreen}
        options={navOptionHandler}
      />
      <StackSettings.Screen
        name="SettingsDetails"
        component={SettingsScreenDetails}
        options={navOptionHandler}
      />
    </StackSettings.Navigator>
  );
};

const tabIconOptions = (props: any) => ({
  tabBarIcon: (icon: any) => {
    const { route } = props;
    let iconName = "";
    if (route.name === "Home") iconName = "home";
    if (route.name === "Settings") iconName = "cog";
    return <FontAwesome5 name={iconName} size={icon.size} color={icon.color} />;
  },
});

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={tabIconOptions}
      tabBarOptions={{ activeTintColor: "tomato", inactiveTintColor: "gray" }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingStack} />
    </Tab.Navigator>
  );
};

const NotificationScreen = (props: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="Notifications"
        initial={true}
        navigation={props.navigation}
      ></CustomHeader>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Notifications!</Text>
      </View>
    </SafeAreaView>
  );
};

export const MixNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
