import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import PaperTabBar from '../../components/PaperTabBar';
import { styles } from '../../styles/tabBarStyles';

export default function TabsLayout() {
  return (
    <Tabs
        tabBar={(props) => <PaperTabBar {...props} />}
        screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFF1D9',
        tabBarInactiveTintColor: '#30271F',
        tabBarActiveBackgroundColor: '#247C79',
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: { fontSize: 10, fontWeight: '700' },
      }}>
      <Tabs.Screen
        name='game'
        options={{
            title:"Игра",
            tabBarIcon:({color})=><Text allowFontScaling={false} style={[styles.iconText, { color }]}>▱</Text>,
        }}/>
        <Tabs.Screen
        name="upgrades"
        options={{
          title: 'Улучшения',
          tabBarIcon: ({ color }) => <Text allowFontScaling={false} style={[styles.iconText, { color }]}>↗</Text>,
        }}
      />
      <Tabs.Screen
        name="rebirth"
        options={{
          title: 'Перерождение',
          tabBarIcon: ({ color }) => <Text allowFontScaling={false} style={[styles.iconText, { color }]}>↻</Text>,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Настройки',
          tabBarIcon: ({ color }) => <Text allowFontScaling={false} style={[styles.iconText, { color }]}>⚙</Text>,
        }}
      />
    </Tabs>
  );
}
