import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DraftNavigation from "./drafts/DraftNavigation";
import DrawerNavigation from "./drafts/DrawerNavigation";
import { MixNavigation } from "./drafts/MixNavigation";
import AsyncComponent from "./drafts/AsyncComponent";
import ThemeComponent from "./drafts/ThemeComponent";
import { StoreProvider } from "./contexts/Store";

export default function App() {
  // return <DraftNavigation></DraftNavigation>;
  // return <DrawerNavigation></DrawerNavigation>;
  // return <MixNavigation></MixNavigation>
  // return <AsyncComponent></AsyncComponent>
  
  return (
    <StoreProvider>
      <ThemeComponent></ThemeComponent>
    </StoreProvider>
  );
}
