import { Alert, Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPermanentPrice, getRebirthReward, permanentUpgrades, REBIRTH_THRESHOLD, useGame } from '../../context/GameContext';
import { formatNumber } from '../../utils/formatNumber';
import { styles } from '../../styles/rebirthStyles';

const clipImage = require('../../../assets/images/golden-paperclip.png');

export default function RebirthScreen() {
  const { shop, rebirth, buyPermanent } = useGame();

  const reward = getRebirthReward(shop.papers);
  const canRebirth = reward > 0;
  const nextThreshold = REBIRTH_THRESHOLD * (reward + 1) ** 2;
  const remaining = Math.max(0, nextThreshold - shop.papers);


  function handleRebirth() {
    if (!canRebirth) return;

    Alert.alert(
      'Начать новый забег?',
      `Ты получишь ${reward} скрепок. Бумажки и обычные покупки сбросятся. Постоянные улучшения сохранятся.`,
      [
        { text: 'Ещё покликаю', style: 'cancel' },
        {
          text: 'Начать заново',
          style: 'destructive',
          onPress: () => rebirth(reward),
        },
      ],
    );
  }

  return(
    <SafeAreaView style = {styles.screen} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>ПЕРЕРОЖДЕНИЕ</Text>
        <Text style={styles.subtitle}>Новый патч. Новый забег.</Text>

        <Image
          source={require('../../../assets/images/rebirth-mascot.png')}
          style={styles.mascot}
          resizeMode="contain"
          accessibilityLabel="Бумажный маскот с заметками патча"
          />

        <Text style = {styles.caption}>За этот забег</Text>

        <View style={styles.rewardRow}>
          <Text style={styles.reward}>+{formatNumber(reward)}</Text>
          <Image source={clipImage} style={styles.rewardClip} resizeMode="contain" />
        </View>

        <Text style={styles.balance}>
          Скрепок: {formatNumber(shop.clips)} → {formatNumber(shop.clips + reward)}
        </Text>

        <View style={styles.note}>
          <Text style={styles.noteText}>Бумажки и обычные покупки сбросятся.</Text>
          <Text style={styles.noteText}>Скрепки и постоянные бонусы останутся.</Text>
        </View>

        <Pressable
          accessibilityRole="button"
          disabled={!canRebirth}
          onPress={handleRebirth}
          style={({ pressed }) => [
            styles.button,
            !canRebirth && styles.disabled,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.buttonText}>
            {canRebirth ? 'НАЧАТЬ НОВЫЙ ЗАБЕГ' : `НУЖНО ${formatNumber(REBIRTH_THRESHOLD)} БУМАЖЕК`}
          </Text>
        </Pressable>

        <Text style={styles.hint}>
          На балансе: {formatNumber(shop.papers)}
        </Text>

        <Text style={styles.hint}>
          Ещё {formatNumber(remaining)} до награды в {formatNumber(reward + 1)} скрепок
        </Text>

        <Text style={styles.sectionTitle}>Закрепить навсегда</Text>

        {permanentUpgrades.map((item=>{
          const level = shop.levels[item.id];
          const price = getPermanentPrice(item.basePrice, level);
          const maxed = level >= item.maxLevel;
          const affordable = shop.clips >= price;
          return(
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.description}>
                Уровень {level} / {item.maxLevel}
              </Text>

              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Улучшить: ${item.title}`}
                disabled={maxed || !affordable}
                onPress={() => buyPermanent(item.id)}
                style={({ pressed }) => [
                  styles.purchaseButton,
                  (maxed || !affordable) && styles.disabled,
                  pressed && styles.pressed,
                ]}
              >
                <Text style={styles.purchaseText}>
                  {maxed ? 'Максимальный уровень' : formatNumber(price)}
                </Text>

                {!maxed && (
                  <Image source={clipImage} style={styles.smallClip} resizeMode="contain" />
                )}
              </Pressable>
            </View>
          );
        }))}
      </ScrollView>

    </SafeAreaView>
  );
}
