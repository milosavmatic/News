import React from 'react'
import { connect } from 'react-redux'
import * as actions from './duck/actions'
import { View, TextInput, FlatList,TouchableWithoutFeedback, Keyboard } from 'react-native'
import { styles } from './styles'
import ItemNewsContainer from '../../components/itemNews/itemNewsContiner';


class SearchScene extends React.Component {
    state = {
        searchField: ''
    }

    componentDidMount() {
        const {searchField} = this.props
        this.onSearch(searchField)
    }

    onSearch = (searchField) => {
        const {loadSearch} = this.props
        this.setState({searchField: searchField})
        loadSearch(searchField)
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




    render() {
        const {articles} = this.props
        const {searchField} = this.state
        return <View style={{alignItems: 'center'}}>
            <TextInput style={styles.textInput}
                       onChangeText={(text) => this.onSearch(text.toLowerCase())} value={searchField} placeholder={'Searching...'}/>
                       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <FlatList data={articles} renderItem={this.renderItem} keyExtractor={(item => item.url.toString() || item.urlToImage.toString())}
            />
                       </TouchableWithoutFeedback>
        </View>
    }
}

const mapStateToProps = ({search}) => {
    return {...search}
}

export default connect(mapStateToProps, {
    ...actions
})(SearchScene)