import PlaceholderScreen from '../../components/PlaceholderScreen';
import { useState } from 'react';
import { Alert, Pressable, ScrollView, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../styles/settingsStyle';


export default function SettingsScreen() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(true);

  function handleLogin() {
    Alert.alert('Вход в аккаунт', 'У вас нет прав');
  }

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style = {styles.title}>Настройки</Text>

        <View style = {styles.card}>
          <Text style = {styles.sectionTitle}>Звук</Text>

          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={styles.label}>Звуковые эффекты</Text>
              <Text style={styles.description}>Нажатия и игровые события</Text>
            </View>

            <Switch
              accessibilityLabel='Звуковые эффекты'
              value= {soundEnabled}
              onValueChange={setSoundEnabled}
              trackColor= {{ false: '#D9C4A8', true: '#247C79' }}
              thumbColor="#FFF8EC"
              ios_backgroundColor="#D9C4A8"/>
          </View>

           <View style={styles.divider} />

          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={styles.label}>Музыка</Text>
              <Text style={styles.description}>Фоновая мелодия игры</Text>
            </View>

            <Switch
              accessibilityLabel="Музыка"
              value={musicEnabled}
              onValueChange={setMusicEnabled}
              trackColor={{ false: '#D9C4A8', true: '#247C79' }}
              thumbColor="#FFF8EC"
              ios_backgroundColor="#D9C4A8"
            />
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Аккаунт</Text>
          <Text style={styles.description}>Вы пока не вошли в аккаунт</Text>

          <Pressable
            accessibilityRole="button"
            onPress={handleLogin}
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          >
            <Text style={styles.buttonText}>Войти в аккаунт</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
