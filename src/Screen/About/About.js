import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import imagePath from '../../constants/imagePath';
import styles from './styles';

export default class About extends Component {
  render() {
    return (
      <View>
        <Text style={styles.main}> About Us </Text>
        <Text style={styles.txt}>
          The Integrity Webs is the digital advertising and software development
          company that strives to provide you solace from the mounting online
          business challenges and hurdles in your way to the digital highway.
          The digital world which is evolving ever since its inception has made
          it imperative for us to assist in understanding the digital age
          dynamics put forth by the rapid changing times.To make your business
          stand out and ahead of the time, we spare no effort.
        </Text>
        <Image source={imagePath.front} style={styles.img} />
      </View>
    );
  }
}
