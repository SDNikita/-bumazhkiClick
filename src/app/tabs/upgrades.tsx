import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGame } from '../../context/GameContext';
import { clickUpgrades, incomeUpgrades } from '../../data/upgrades';
import { styles } from '../../styles/upgradeStyles';
import { formatNumber } from '../../utils/formatNumber';

type Section = 'market' | 'income';
const getIncomePrice = (base: number, count: number) => Math.ceil(base * 1.15 ** count);

export default function UpgradesScreen() {
  const [section, setSection] = useState<Section>('market');
  const { shop, setShop, priceMultiplier, papersPerSecond } = useGame();

  function buyClickUpgrade(item: (typeof clickUpgrades)[number]) {
    setShop((previous) => {
      const price = Math.ceil(item.price * (1 - previous.levels.discount * 0.0025));
      if (previous.purchased.includes(item.id) || previous.papers < price) return previous;
      return { ...previous, papers: previous.papers - price, purchased: [...previous.purchased, item.id] };
    });
  }

  function buyIncomeUpgrade(item: (typeof incomeUpgrades)[number]) {
    setShop((previous) => {
      const quantity = previous.quantities[item.id] ?? 0;
      const price = Math.ceil(getIncomePrice(item.price, quantity) * (1 - previous.levels.discount * 0.0025));
      if (previous.papers < price) return previous;
      return { ...previous, papers: previous.papers - price, quantities: { ...previous.quantities, [item.id]: quantity + 1 } };
    });
  }

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>УЛУЧШЕНИЯ</Text>
        <Text style={styles.balance}>▱ {formatNumber(shop.papers)}</Text>
        <View style={styles.tabs}>
          {(['market', 'income'] as const).map((key) => (
            <Pressable key={key} accessibilityRole="button" accessibilityState={{ selected: section === key }} onPress={() => setSection(key)} style={[styles.tab, section === key && styles.activeTab]}>
              <Text style={[styles.tabText, section === key && styles.activeTabText]}>{key === 'market' ? 'Барахолка' : 'Движуха'}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.hint}>{section === 'market' ? 'Разовые покупки до перерождения' : 'Каждая покупка увеличивает доход'}</Text>
        {section === 'market' ? (
          <View style={styles.grid}>
            {clickUpgrades.map((item) => {
              const purchased = shop.purchased.includes(item.id);
              const price = Math.ceil(item.price * priceMultiplier);
              const affordable = shop.papers >= price;
              return (
                <View key={item.id} style={styles.marketCard}>
                  <Image source={item.image} style={styles.marketImage} resizeMode="contain" accessible={false} />
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <Pressable accessibilityRole="button" accessibilityLabel={`${item.title}: ${purchased ? 'куплено' : formatNumber(price) + ' бумажек'}`} disabled={purchased || !affordable} onPress={() => buyClickUpgrade(item)} style={({ pressed }) => [styles.buyButton, !affordable && styles.unavailableButton, purchased && styles.purchasedButton, pressed && styles.pressed]}>
                    <Text style={[styles.buyText, purchased && styles.purchasedText]}>{purchased ? '✓ Куплено' : `▱ ${formatNumber(price)}`}</Text>
                  </Pressable>
                </View>
              );
            })}
          </View>
        ) : (
          <View style={styles.list}>
            {incomeUpgrades.map((item) => {
              const quantity = shop.quantities[item.id] ?? 0;
              const price = Math.ceil(getIncomePrice(item.price, quantity) * priceMultiplier);
              const affordable = shop.papers >= price;
              return (
                <View key={item.id} style={styles.incomeCard}>
                  <Image source={item.image} style={styles.incomeImage} resizeMode="contain" accessible={false} />
                  <View style={styles.incomeDetails}>
                    <Text style={styles.incomeTitle}>{item.title}</Text>
                    <Text style={styles.description}>Куплено: {formatNumber(quantity)}</Text>
                    <Text style={styles.description}>+{formatNumber(item.income)} / сек. за каждого</Text>
                    <Pressable accessibilityRole="button" accessibilityLabel={`Купить ${item.title} за ${formatNumber(price)} бумажек`} disabled={!affordable} onPress={() => buyIncomeUpgrade(item)} style={({ pressed }) => [styles.buyButton, !affordable && styles.unavailableButton, pressed && styles.pressed]}>
                      <Text style={styles.buyText}>▱ {formatNumber(price)}</Text>
                    </Pressable>
                  </View>
                </View>
              );
            })}
            <Text style={styles.incomeTotal}>Доход: {formatNumber(papersPerSecond)} бумажки / сек.</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
