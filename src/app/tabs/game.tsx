import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGame } from '../../context/GameContext';
import { styles } from '../../styles/gameStyles';
import { formatNumber } from '../../utils/formatNumber';

export default function GameScreen() {
  const { shop, papersPerClick, papersPerSecond, collectPaper } = useGame();

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'left', 'right']}>
      <View style={styles.content}>
        <Text style={styles.title}>БУМАЖКИ</Text>
        <View style={styles.stats}>
          <Text style={styles.balance} numberOfLines={1} adjustsFontSizeToFit>
            {formatNumber(shop.papers)}
          </Text>
          <Text style={styles.income}>
            +{formatNumber(papersPerClick)} за клик · +{formatNumber(papersPerSecond)} в секунду
          </Text>
        </View>
        <View style={styles.clickArea}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Собрать бумажки"
            onPress={collectPaper}
            style={({ pressed }) => [styles.stackButton, pressed && styles.stackPressed]}
          >
            <Image source={require('../../../assets/images/paper-stack.png')} style={styles.stack} resizeMode="contain" />
          </Pressable>
          <Text style={styles.hint}>Нажимай на стопку</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
