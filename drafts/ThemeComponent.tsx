import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Store, EAction } from "../contexts/Store";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dark } from "../consts/Dark";
import { Light } from "../consts/Light";

const ThemeComponent = () => {
  const { state, dispatch } = useContext(Store);
  const changeTheme = () => {
    dispatch({
      type: "CHANGE_THEME",
      payload: state.theme.MODE === "light" ? Dark : Light,
    });
  };

  return (
    <View style={styles(state.theme).container}>
      <StatusBar barStyle={state.theme.STATUS_BAR_STYLE} />
      <TouchableOpacity
        style={styles(state.theme).button}
        onPress={changeTheme}
      >
        <Text style={styles(state.theme).buttonText}>Change theme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThemeComponent;

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.BACKGROUND_COLOR,
    },
    button: {
      paddingVertical: 20,
      paddingHorizontal: 25,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
      borderWidth: 1,
      borderColor: theme.PRIMARY_BODER_COLOR,
      borderRadius: 6,
    },
    buttonText: {
      color: theme.PRIMARY_TEXT_COLOR,
    },
  });
