import React from 'react'
import { View, Text, StyleSheet} from 'react-native';


class NewsScene extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Test test</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default NewsScene