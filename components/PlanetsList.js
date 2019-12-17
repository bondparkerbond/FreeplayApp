import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import PlanetDetail from "./PlanetDetail";
const baseUrl = "https://swapi.co/api";

export default function PlanetsList(props) {
  const [planets, setPlanets] = useState({ count: 0, results: [{ name: "No Planets Fetched", url: "0" }] });
  const [isFetching, setIsFetching] = useState(false);
  const [count, setCount] = useState(0);

  storePlanets = planets => {
    setIsFetching(false);
    setPlanets(planets);
  };

  const fetchPlanets = isFetching => {
    fetch(`${baseUrl}/planets/`)
      .then(res => res.json())
      .then(res => storePlanets(res))
      .catch(err => console.warn("Fetch call caught error!", { err }));
  };

  startFetching = isFetching => {
    setIsFetching({ isFetching: !isFetching });
    fetchPlanets();
  };

  incrementCount = count => {
    if (count > 8) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <View style={styles.container}>
        {planets.results[0].name == "No Planets Fetched" ? (
          <Button title="fetch planets" onPress={() => startFetching(isFetching)} />
        ) : (
          <View style={styles.container}>
            <Text style={styles.title}>Planet List</Text>
            <FlatList
              style={{ flex: 1 }}
              data={[...planets.results]}
              renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
              keyExtractor={planet => planet.url}
            />
            <Button title="Increment" onPress={() => incrementCount(count)} />
            <PlanetDetail planet={planets.results[count]} count={count} />
          </View>
        )}
        <Text>Are we fetching the planets? {isFetching ? "Yes" : "No"}</Text>
      </View>
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
  item: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
});
