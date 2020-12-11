import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux'
import * as actions from '../duck/actions'
import { styles } from '../../news/styles';
import ItemNewsContainer from '../../../components/itemNews/itemNewsContiner';
import Buttons from '../../../components/buttons/buttons'


class ContainerCategory extends React.Component {
    componentDidMount() {
        this.onChangeCountry('gb')
    }

    renderItem = ({item}) => {
        const { navigation } = this.props
        return (
            <ItemNewsContainer title={item.title} description={item.description} image={item.urlToImage}
                               titleButton={'More >'} onChangeScene={() => navigation.navigate('Details News', {
                item
            })}/>
        )

    }

    onChangeCountry = (country) => {
        const {loadEntertainmentCategory} = this.props
        loadEntertainmentCategory(country)
    }

    render() {
        const { category, title } = this.props.route.params
        return (
            <View style={styles.container}>
                <View style={styles.navTape}>
                    <Buttons title={"GB"} onNavigation={() => this.onChangeCountry("gb")}/>
                    <Buttons title={'US'} onNavigation={() => this.onChangeCountry("us")}/>
                </View>
                <Text style={styles.title}>{title}</Text>
                <FlatList  data={category} renderItem={this.renderItem} keyExtractor={item => item.title}/>
            </View>
        )
    }
}

const mapStateToProps = ({category}) => {
    return {...category}
}

export default connect(mapStateToProps, {
    ...actions
})(ContainerCategory)