import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const LocationDisplay = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationName, setLocationName] = useState('');
  console.log(locationName,'<- this shit aint working')

  useEffect(() => {
    // Get the current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation(position);

        // Reverse geocoding
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=YOUR_API_KEY`)
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
    if (currentLocation) {
      const { latitude, longitude } = currentLocation.coords;
      return `Latitude: ${latitude.toFixed(2)}, Longitude: ${longitude.toFixed(2)}, Location: ${locationName}`;
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    zIndex: 9999,
  },
  locationText: {
    color: '#ffffff',
    fontSize: 14,
  },
});

export default LocationDisplay;
