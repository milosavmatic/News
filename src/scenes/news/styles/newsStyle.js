import { StyleSheet } from 'react-native';
import { colors } from '../../../styleguide'


const NewsStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    navTape: {
        width: '100%',
        height: '5%',
        flexDirection: 'row'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5
    },
})

export default NewsStyle;