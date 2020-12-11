import React from 'react'
import { ScrollView } from 'react-native';
import ItemNewsContainer from '../itemNews/itemNewsContiner';


const DetailsNews = ({navigation, route}) => {
    const {item} = route.params
    return (
        <ScrollView>
            <ItemNewsContainer title={item.title} image={item.urlToImage} description={item.content}
                               navigationBack={() => navigation.navigate('Top News')} titleBackButton={'< Back'}/>
        </ScrollView>)
}

export default DetailsNews