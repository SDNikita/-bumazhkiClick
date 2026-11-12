import type { BottomTabBarProps } from 'expo-router/tabs';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../styles/tabBarStyles';

export default function PaperTabBar({ state, descriptors, emitter, navigateToTab, insets }: BottomTabBarProps) {
  return (
    <View style={[styles.bar, { paddingLeft: insets.left, paddingRight: insets.right }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const focused = state.index === index;
        const color = focused ? '#FFF1D9' : '#30271F';
        const label = typeof options.tabBarLabel === 'string' ? options.tabBarLabel : options.title ?? route.name;

        function handlePress() {
          const event = emitter.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
          if (!focused && !event.defaultPrevented) {
            navigateToTab(route.key);
          }
        }

        return (
          <Pressable
            key={route.key}
            accessibilityRole="tab"
            accessibilityState={{ selected: focused }}
            accessibilityLabel={options.tabBarAccessibilityLabel ?? label}
            onPress={handlePress}
            onLongPress={() => emitter.emit({ type: 'tabLongPress', target: route.key })}
            style={({ pressed }) => [styles.tab, focused && styles.activeTab, { paddingBottom: insets.bottom }, pressed && styles.pressedTab]}
          >
            <View style={styles.tabContent}>
              <View style={styles.icon}>
                {options.tabBarIcon?.({ focused, color, size: 26 })}
              </View>
              <Text style={[styles.label, { color }]} numberOfLines={1} adjustsFontSizeToFit>
                {label}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
