import React from "react";
import { StyleSheet, View } from "react-native";
import PlanetsList from "./components/PlanetsList";

export default function App() {
  return (
    <View style={styles.container}>
      <PlanetsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
