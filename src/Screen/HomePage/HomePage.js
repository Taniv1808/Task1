import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import imagePath from '../../constants/imagePath'
import styles from './styles'

export default class HomePage extends Component {
    render() {
        return (
            <View>
                <Text style={styles.txt}>Welcome to The Integrity Webs</Text>
                <Image source={imagePath.logo} style={styles.img}/>
            </View>
        )
    }
}
