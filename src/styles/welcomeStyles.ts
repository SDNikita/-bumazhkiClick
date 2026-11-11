import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: '#F8E5CC',
    },
    content:{
        flex:1,
        width: '100%',
        maxWidth: 540,
        alignSelf:'center',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 32,
    },
    header:{
        alignItems: 'center',
        gap: 14,
    },
    illustrationContainer:{
        flex:1,
        minHeight:180,
        marginVertical:20,
    },
    illustration:{
        width: '100%',
        height: '100%',
    },
    buttonText:{
        fontSize:36,
        fontWeight:'900',
        letterSpacing:3,
        color: '#FFF1D9',
    },
    button:{
        width:'88%',
        maxWidth: 340,
        minHeight:76,
        backgroundColor:'#247C79',
        alignItems:'center',
        alignSelf:'center',
        justifyContent:"center",
        borderRadius:16,
        borderBottomWidth:5,
        borderBottomColor:'#195C59',
        transform: [{ rotate: '-1deg' }],
    },
    buttonPressed:{
        opacity: 0.9,
        transform: [{ rotate: '-1deg' }, { scale: 0.96 }],
    },
    title:{
        fontSize:48,
        fontWeight:'900',
        color:'#30271F',
        letterSpacing:1,
        textAlign:'center',
        transform:[{rotate:'-2deg'}]
    },
    subTitle:{
        fontSize: 16,
        color: '#40352B',
        textAlign: 'center',
    },
});