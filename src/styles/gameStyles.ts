import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: '#F8E5CC',
    },
    content:{
        flex: 1,
        width: '100%',
        maxWidth: 540,
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingTop: 16,
    }, 
    title:{
        fontSize: 38,
        fontWeight: '900',
        color: '#30271F',
        textAlign: 'center',
        letterSpacing: 1,
    },
    stats:{
        alignItems: 'center',
        marginTop: 24,
        gap: 6,
    },
    balance:{
        width: '100%',
        fontSize: 64,
        fontWeight: '900',
        color: '#30271F',
        textAlign: 'center',
    },
    income:{
        fontSize: 16,
        fontWeight: '600',
        color: '#514334',
        textAlign: 'center',
    },
    clickArea:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        gap: 12,
    },
    stackButton: {
        width: '100%',
        maxWidth: 420,
        height: '70%',
        maxHeight: 400,
    },
    stackPressed: {
        transform: [{ scale: 0.96 }],
    },
    stack: {
        width: '100%',
        height: '100%',
    },
    hint: {
        fontSize: 17,
        fontWeight: '600',
        color: '#675747',
    textAlign: 'center',
  },
});