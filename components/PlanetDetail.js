import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function PlanetDetail(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planet {props.count} Detail</Text>
      <Text> </Text>
      <Text>Name: {props.planet.name}</Text>
      {/* <Text>{planet.planet.population}</Text> */}
      <Text>Diameter: {props.planet.diameter}</Text>
      <Text>Number of days in a year: {props.planet.orbital_period}</Text>
      <Text>Number of hours in a day: {props.planet.rotation_period}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
});
