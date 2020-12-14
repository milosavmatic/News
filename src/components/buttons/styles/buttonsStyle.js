import { StyleSheet } from 'react-native';
import { colors } from '../../../styleguide';


const buttonsStyle = StyleSheet.create({
    button: {
        width: '50%',
        height: '100%',
        backgroundColor: colors.BUTTON.PRIMARY,
        flex:  1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.TEXT_COLOR.PRIMARY
    },
    buttonText: {
        color: colors.TEXT_COLOR.PRIMARY
    },
    isActive: {
        width: '50%',
        height: '100%',
        backgroundColor: 'red',
        flex:  1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.TEXT_COLOR.PRIMARY
}
})

export default buttonsStyle