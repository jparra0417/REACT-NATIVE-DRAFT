import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DraftNavigation from "./drafts/DraftNavigation";
import DrawerNavigation from "./drafts/DrawerNavigation";

export default function App() {
  // return <DraftNavigation></DraftNavigation>;
  return <DrawerNavigation></DrawerNavigation>;
}
