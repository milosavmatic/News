import { StyleSheet } from 'react-native';

export const CategoriesStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    navTape: {
        width: '100%',
        height: '7%',
        flexDirection: 'row'

    },
    itemContainer: {
        width: 420,
        height: '100%'
    },
    itemTitle: {
        width: '90%',
        fontSize: 24,
        textAlign: 'center'
    },
    image: {
        width: '90%',
        height: '40%',
        resizeMode: "contain"
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