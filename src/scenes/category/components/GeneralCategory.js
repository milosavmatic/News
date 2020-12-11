import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../duck/actions'
import { View, Text, FlatList, TouchableOpacity, Image,  } from 'react-native'
import { styles } from '../styles';


class GeneralCategory extends React.Component {
    componentDidMount() {
        const {loadGeneralCategory} = this.props
        loadGeneralCategory()
    }

    renderItem = ({item}) => {
        const { navigation } = this.props
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Image source={{uri: item.urlToImage}} style={styles.image}/>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Details News', {
                    item
                })}>
                    <Text style={styles.itemTextButton}>
                        {'More >'}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        const {generalCategory, navigation } = this.props
        let category = generalCategory
        let title = 'General'
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={() => navigation.navigate('Category Container', {
                    category, title
                })}><Text
                    style={{fontSize: 25, fontWeight: 'bold'}}>{'General'}</Text></TouchableOpacity>
                <FlatList contentContainerStyle={{height: 400}} data={generalCategory.slice(0, 5)}
                          renderItem={this.renderItem} keyExtractor={item => item.title} horizontal={true}
                />
            </View>
        )
    }
}

const mapStateToProps = ({category}) => {
    return {...category}
}

export default connect(mapStateToProps, {
    ...actions
})(GeneralCategory)