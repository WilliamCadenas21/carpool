import React from 'react';
import {
  View, 
  StyleSheet,
  StatusBar,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class MapScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <StatusBar barStyle='dark-content' backgroundColor='white' />
          <MapView 
            style={styles.map}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            region={{
              latitude: 11.004107,
              longitude: -74.806984, 
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121, 
            }}
          />
        </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

