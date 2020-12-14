import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux'
import * as actions from '../duck/actions'
import { styles } from '../styles';
import ItemNewsContainer from '../../../components/itemNews/itemNewsContiner';
import Buttons from '../../../components/buttons/buttons'


class ContainerCategory extends React.PureComponent {
    componentDidMount() {
        const {country} = this.props
        this.onChangeCountry(country)
    }

    renderItem = ({item}) => {
        const {navigation} = this.props
        return (
            <ItemNewsContainer title={item.title} description={item.description} image={item.urlToImage}
                               titleButton={'More >'} onChangeScene={() => navigation.navigate('Details News', {
                item
            })}/>
        )

    }

    onChangeCountry = (country) => {
        const {
            loadEntertainmentCategory,
            loadGeneralCategory,
            loadHealthCategory,
            loadScienceCategory,
            loadSportCategory,
            loadTechnologyCategory
        } = this.props
        loadEntertainmentCategory(country)
        loadGeneralCategory(country)
        loadHealthCategory(country)
        loadScienceCategory(country)
        loadSportCategory(country)
        loadTechnologyCategory(country)
    }

    viewCategory = () => {
        const {title} = this.props.route.params
        const {
            entertainmentCategory,
            generalCategory,
            healthCategory,
            scienceCategory,
            sportCategory,
            technologyCategory
        } = this.props
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
        const {title} = this.props.route.params
        const {country} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.navTape}>
                    <Buttons title={"GB"} onNavigation={() => this.onChangeCountry('gb')} isActive={country === 'gb'}/>
                    <Buttons title={'US'} onNavigation={() => this.onChangeCountry('us')} isActive={country === 'us'}/>
                </View>
                <Text style={styles.title}>{title}</Text>
                <FlatList data={this.viewCategory()} renderItem={this.renderItem} keyExtractor={item => item.title}
                          initialNumToRender={7} ref={(ref) => {
                    this.flatListRef = ref;
                }}
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
})(ContainerCategory)