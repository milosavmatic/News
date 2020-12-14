import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../duck/actions'
import Carousel from 'react-native-snap-carousel';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { styles } from '../styles';


class TechnologyCategory extends React.Component {
    componentDidMount() {
        const {loadTechnologyCategory} = this.props
        loadTechnologyCategory()
    }

    renderItem = ({item}) => {
        const {navigation} = this.props
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
        const {technologyCategory, navigation} = this.props
        const category = technologyCategory
        let title = 'Technology'
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}}
                                  onPress={() => navigation.navigate('Category Container', {
                                      category, title
                                  })}><Text
                    style={{fontSize: 25, fontWeight: 'bold'}}>{'Technology'}</Text></TouchableOpacity>
                <Carousel data={technologyCategory.slice(0, 5)} renderItem={this.renderItem}
                          sliderWidth={Dimensions.get('window').width}
                          itemWidth={Dimensions.get('window').width} autoplay={true} enableMomentum={false}
                          lockScrollWhileSnapping={true} autoplayInterval={3000} loop={true} enableSnapје={true}/>
            </View>
        )
    }
}

const mapStateToProps = ({category}) => {
    return {...category}
}

export default connect(mapStateToProps, {
    ...actions
})(TechnologyCategory)