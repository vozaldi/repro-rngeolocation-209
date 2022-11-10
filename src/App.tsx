import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Geolocation from "@react-native-community/geolocation";

function App() {
  // States
  const [error, setError] = useState('');

  // Vars
  const handleLocationRequest = () => {
    Geolocation.getCurrentPosition(() => {
      setError('Location retrieved');
    }, ({ code }) => {
      setError(`Unable to retrieve location. Code: ${code}`);
    }, { timeout: 10000 });
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={() => handleLocationRequest()}
        title="Get Location"
      />

      <Text style={{ marginTop: 24 }}>
        {error || 'No Error'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
});

export default App;
