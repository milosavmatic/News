import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux'
import * as actions from './duck/actions'
import { styles } from './styles';
import ItemNewsContainer from '../../components/itemNews/itemNewsContiner';
import Buttons from '../../components/buttons/buttons';


class NewsScene extends React.Component {
    componentDidMount() {
        this.onChangeCountry('gb')
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
        const {loadNews} = this.props
        loadNews(country)
    }

    render() {
        const {articles, countryNews} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.navTape}>
                    <Buttons title={"GB"} onNavigation={() => this.onChangeCountry("gb")}
                             isActive={countryNews === 'gb'}/>
                    <Buttons title={'US'} onNavigation={() => this.onChangeCountry("us")}
                             isActive={countryNews === 'us'}/>
                </View>
                <FlatList data={articles} renderItem={this.renderItem} keyExtractor={item => item.title}/>
            </View>
        )
    }
}

const mapStateToProps = ({news}) => {
    return {...news}
}

export default connect(mapStateToProps, {
    ...actions
})(NewsScene)
