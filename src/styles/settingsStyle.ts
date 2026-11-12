import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8E5CC',
  },
  content: {
    width: '100%',
    maxWidth: 540,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
    gap: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#30271F',
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#FFF1DC',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#D9C4A8',
    padding: 20,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 23,
    fontWeight: '800',
    color: '#30271F',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  rowText: {
    flex: 1,
    gap: 4,
  },
  label: {
    fontSize: 17,
    fontWeight: '700',
    color: '#30271F',
  },
  description: {
    fontSize: 14,
    color: '#675747',
    lineHeight: 21,
  },
  divider: {
    height: 1,
    backgroundColor: '#E4CFB3',
  },
  button: {
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#247C79',
    borderRadius: 12,
    borderBottomWidth: 4,
    borderBottomColor: '#195C59',
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFF1D9',
    textAlign: 'center',
  },
});