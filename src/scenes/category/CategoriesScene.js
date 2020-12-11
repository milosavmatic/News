import React from 'react'
import { connect } from 'react-redux'
import { View, ScrollView } from 'react-native';
import { styles } from './styles';
import Buttons from '../../components/buttons/buttons';
import * as actions from './duck/actions'
import EntertainmentCategory from './components/EntertainmentCategory';
import GeneralCategory from './components/GeneralCategory';
import HealthCategory from './components/HealthCategory';
import ScienceCategory from './components/ScienceCategory';
import SportCategory from './components/SportCategory';
import TechnologyCategory from './components/TechnologyCategory';

class CategoriesScene extends React.PureComponent {
    onChangeCategoryCountry = (country) => {
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

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.navTape}>
                    <Buttons title={"GB"} onNavigation={() => this.onChangeCategoryCountry("gb")}/>
                    <Buttons title={'US'} onNavigation={() => this.onChangeCategoryCountry("us")}/>
                </View>
                <ScrollView>
                    <EntertainmentCategory navigation={navigation}/>
                    <GeneralCategory navigation={navigation}/>
                    <HealthCategory navigation={navigation}/>
                    <ScienceCategory navigation={navigation}/>
                    <SportCategory navigation={navigation}/>
                    <TechnologyCategory navigation={navigation}/>
                </ScrollView>
            </View>
        )
    }
}


const mapStateToProps = ({category}) => {
    return {...category}
}

export default connect(mapStateToProps, {
    ...actions
})(CategoriesScene)
