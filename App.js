import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

const Screen = () => {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  if (userNumber) {
    return <GameScreen userChoice={userNumber} />;
  }

  return <StartGameScreen onStartGame={startGameHandler} />;
};

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <Screen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
