import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../duck/actions'
import { View, Text, FlatList, TouchableOpacity, Image,  } from 'react-native'
import { styles } from '../styles';


class SportCategory extends React.Component {
    componentDidMount() {
        const {loadSportCategory} = this.props
        loadSportCategory()
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
                })
                }>
                    <Text style={styles.itemTextButton}>
                        {'More >'}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        const { sportCategory, navigation } = this.props
        let category = sportCategory
        let title = 'Sport'
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={() => navigation.navigate('Category Container', {
                    category, title
                })}><Text
                    style={{fontSize: 25, fontWeight: 'bold'}}>{'Sport'}</Text></TouchableOpacity>
                <FlatList contentContainerStyle={{height: 400}} data={sportCategory.slice(0, 5)}
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
})(SportCategory)