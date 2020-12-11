import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../../../styleguide'

const itemStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height < 800 ? 500 :  500,
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    image: {
        width: '100%',
        resizeMode: 'contain',
        height: Dimensions.get('window').height < 800 ? '30%' :  '50%',
        borderRadius: 5,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: "400",
        textAlign: 'center',
        marginTop: 20
    },
    description: {
        fontSize: 15,
        textAlign: 'center'
    },
    linkButton: {
        alignItems: 'flex-end'
    },
    textButton: {
        fontSize: 15,
        fontWeight: 'bold'
    },
})

export default itemStyle;