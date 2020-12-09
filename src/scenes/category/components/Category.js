import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../duck/actions'
import { View, Text, FlatList, TouchableOpacity, Image,  } from 'react-native'
import { styles } from '../styles';


class Category extends React.Component {
    componentDidMount() {
        const { category } = this.props
        this.onChangeCategoryCountry('us', category )
    }

    onChangeCategoryCountry = (country, category) => {
        const {loadCategory} = this.props
        loadCategory(country, category)
    }

    renderItem = ({item}) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Image source={{uri: item.urlToImage}} style={styles.image}/>
                <Text style={styles.description}>{item.description}</Text>
                <TouchableOpacity style={styles.itemButton}>
                    <Text style={styles.itemTextButton}>
                        {'More >'}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        const {articlesCategory, category} = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}}><Text
                    style={{fontSize: 25, fontWeight: 'bold'}}>{category}</Text></TouchableOpacity>
                <FlatList contentContainerStyle={{height: 400}} data={articlesCategory.slice(0, 5)}
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
})(Category)