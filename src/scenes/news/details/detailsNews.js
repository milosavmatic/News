import React from 'react'
import ItemNewsContainer from '../../../components/itemNews/itemNewsContiner';


const DetailsNews = ({navigation, route}) =>  {
        const { item } = route.params
        return(
            <ItemNewsContainer title={item.title} image={item.urlToImage} description={item.content}
                               navigationBack={() => navigation.navigate('Top News')} titleBackButton={'< Back'}/>
        )
}

export default DetailsNews