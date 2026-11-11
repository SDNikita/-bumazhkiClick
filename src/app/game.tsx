import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GameScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8E5CC' }}>
      <Text>Здесь будет игра</Text>
    </SafeAreaView>
  );
}