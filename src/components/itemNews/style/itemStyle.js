import { StyleSheet } from 'react-native';
import { colors } from '../../../styleguide'

const itemStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: 600,
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    image: {
        width: '100%',
        height: '50%',
        borderRadius: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: "400",
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 20
    },
    description: {
        marginTop: 20,
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