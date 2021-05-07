import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import imagePath from '../../constants/imagePath'
import styles from './styles'

export default class Profile extends Component {
    render() {
        return (
            <View>
                <Text style={styles.txt}> Profile </Text>
                <Image source={imagePath.ceo} style={styles.img}/>
            </View>
        )
    }
}
