import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const LocationDisplay = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationName, setLocationName] = useState('');
  
  useEffect(() => {
    // Get the current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Reverse geocoding
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyBpFfhUfvUuoWYoQ0qGDjk_J-1dNy2Roz4`)
        .then((response) => response.json())
        .then((data) => {
          if (data.results.length > 0) {
            setLocationName(data.results[0].formatted_address);
            }
          })
          .catch((error) => console.log(error));
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  // Format the location coordinates and name as a string
  const getLocationString = () => {
    if (locationName) {
      // const { latitude, longitude } = currentLocation.coords;
      return `${locationName}`;
    }
    return 'Getting location...';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.locationText}>{getLocationString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    zIndex: 9999,
  },
  locationText: {
    color: 'rgb(0, 0, 0)',
    fontSize: 14,
  },
});

export default LocationDisplay;
