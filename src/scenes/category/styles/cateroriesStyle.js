import { StyleSheet, Dimensions } from 'react-native';

export const CategoriesStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    navTape: {
        width: '100%',
        height: '5%',
        flexDirection: 'row'

    },
    itemContainer: {
        width: Dimensions.get('window').width > 320 ? 410 : 330,
        height: Dimensions.get('window').height > 535 ? 450 : 480
    },
    itemTitle: {
        width: '90%',
        fontSize: 24,
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: '50%',
    },
    itemDescription: {
        width: '90%',
        fontSize: 15,
        textAlign: 'center'
    },
    itemButton: {
        alignItems: 'flex-end',
        paddingRight: 60
    },
    itemTextButton: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default CategoriesStyle