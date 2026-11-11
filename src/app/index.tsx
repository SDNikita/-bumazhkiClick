import { router } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/welcomeStyles';

export default function WelcomeScreen() {
  function handleStart(){
    router.push('/game');
  }

  return (
    <SafeAreaView style = {styles.screen}>
      <View style = {styles.content}>

        <View style = {styles.header}>
          <Text style = {styles.title}>
            Бумажки
          </Text>
          <Text style = {styles.subTitle}>
            Большая история с чистого листа
          </Text>
        </View>

        <View style={styles.illustrationContainer}>
          <Image
            source={require('../../assets/images/welcome-mascot.png')}
            style={styles.illustration}
            resizeMode="contain"
            accessibilityLabel="Маскот удерживает стопку бумаги"
            />
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={handleStart}
          style = {({pressed})=>[styles.button, pressed&&styles.buttonPressed]}
          >
           <Text style={styles.buttonText}>СТАРТ</Text>
        </Pressable>
      </View>

    </SafeAreaView>

    
  );
}