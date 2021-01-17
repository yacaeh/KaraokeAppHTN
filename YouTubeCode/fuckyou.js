import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import YouTube from 'react-native-youtube';

const YoutubeExample = () => {
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState('');
  const [quality, setQuality] = useState('');
  const [error, setError] = useState('');

  return (
    <View style={styles.container}>
      <YouTube
        apiKey="AIzaSyD____IjOqGtOIHAfvWEnvWr3dorWEtAPs"
        videoId="W6YI3ZFOL0A" // The YouTube video ID
        play // control playback of video with true/false
        fullscreen={false} // video should play in fullscreen or inline
        loop={false} // control whether the video should loop when ended
        onReady={(e) => setIsReady(true)}
        onChangeState={(e) => setStatus(e.state)}
        onChangeQuality={(e) => setQuality(e.quality)}
        onError={(e) => setError(e.error)}
        style={styles.youtube}
      />
      <Text>{`Status: ${status}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  youtube: {
    alignSelf: 'stretch',
    height: 300,
  },
});

export default YoutubeExample;