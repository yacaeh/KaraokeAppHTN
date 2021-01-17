import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YouTube from 'react-native-youtube';

export default class YoutubeExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isReady: false,
        status: "",
        quality: "",
        error: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <YouTube
        apiKey="AIzaSyD____IjOqGtOIHAfvWEnvWr3dorWEtAPs"
        videoId="W6YI3ZFOL0A" // The YouTube video ID
        play // control playback of video with true/false
        fullscreen={false} // video should play in fullscreen or inline
        loop={false} // control whether the video should loop when ended
        onReady={e => this.setState({ isReady: true })}
        onChangeState={e => this.setState({ status: e.state })}
        onChangeQuality={e => this.setState({ quality: e.quality })}
        onError={e => this.setState({ error: e.error })}
        style={styles.youtube}
        />
        <Text>{`Status: ${this.state.status}`}</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    youtube: {
    alignSelf: 'stretch',
    height: 300
    }
});