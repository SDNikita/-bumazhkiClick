import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: '#f7e0c3',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#D9C4A8',
  },
  tab: {
    flex: 1,
    minWidth: 0,
  },
  activeTab: {
    backgroundColor: '#247C79',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  pressedTab: {
    opacity: 0.8,
  },
  tabContent: {
    minHeight: 72,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  icon: {
    height: 36,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    width: '100%',
    fontSize: 10,
    lineHeight: 14,
    includeFontPadding: false,
    flexShrink: 0,
    fontWeight: '700',
    textAlign: 'center',
  },
  iconText: {
    fontSize: 26,
    lineHeight: 32,
    includeFontPadding: false,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
