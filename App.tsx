import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DraftNavigation from "./drafts/DraftNavigation";

export default function App() {
  return <DraftNavigation></DraftNavigation>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
