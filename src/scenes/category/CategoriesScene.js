import React from 'react'
import Category from './components/Category';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';
import Buttons from '../../components/buttons/buttons';
import {categories } from './duck/selectors';

class CategoriesScene extends React.PureComponent {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.navTape}>
                    <Buttons title={"GB"} onNavigation={() => this.onChangeCategoryCountry("gb")}/>
                    <Buttons title={'US'} onNavigation={() => this.onChangeCategoryCountry("us")}/>
                </View>
                <ScrollView>
                    <View>
                        {categories.map(category =>
                        <Category category={category} key={category}/>
                        )}

                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default CategoriesScene