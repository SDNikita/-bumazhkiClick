import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GameProvider } from '../context/GameContext';


export default  function RootLayout(){
  return(
    <SafeAreaProvider>
      <GameProvider>
        <StatusBar style = "dark"/>
        <Stack screenOptions={{ headerShown: false }} />
      </GameProvider>
    </SafeAreaProvider>
  );
}
