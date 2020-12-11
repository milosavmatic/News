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
        const {loadEntertainmentCategory, loadGeneralCategory, loadHealthCategory, loadScienceCategory, loadSportCategory, loadTechnologyCategory} = this.props
        loadEntertainmentCategory(country)
        loadGeneralCategory(country)
        loadHealthCategory(country)
        loadScienceCategory(country)
        loadSportCategory(country)
        loadTechnologyCategory(country)
    }

     viewCategory = () => {
        const {title } = this.props.route.params
        const {entertainmentCategory, generalCategory, healthCategory,scienceCategory, sportCategory, technologyCategory } = this.props
        switch (title) {
            case 'Entertainment':
                return entertainmentCategory
            case 'General':
                return generalCategory
            case 'Health':
                return healthCategory
            case 'Science':
                return scienceCategory
            case 'Sport':
                return sportCategory
            case 'Technology':
                return technologyCategory
            default:
                return []
        }
    }

    render() {
        const { title } = this.props.route.params
        return (
            <View style={styles.container}>
                <View style={styles.navTape}>
                    <Buttons title={"GB"} onNavigation={() => this.onChangeCountry("gb")}/>
                    <Buttons title={'US'} onNavigation={() => this.onChangeCountry("us")}/>
                </View>
                <Text style={styles.title}>{title}</Text>
                <FlatList  data={this.viewCategory()} renderItem={this.renderItem} keyExtractor={item => item.title}/>
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