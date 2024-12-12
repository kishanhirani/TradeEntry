import {Alert, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScaleSize} from './src/helper/ScaleSize';

const App = () => {
  let url =
    'https://script.google.com/macros/s/AKfycbx7tyWJEa1p9b8f4bqMwpPxFgBK0x_XuturaJSPxMzFtL5St7kRXZqgcg8XMKxSLCwr/exec';
  const submitData = async () => {
    try {
      // Prepare data to send
      const formData = new FormData();
      formData.append('name', 'Silver');
      formData.append('price', 90);
      formData.append('action', 'Buy');

      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      console.log('response', response);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  setTimeout(() => {
    submitData();
  }, 1000);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#f1f1f1'} barStyle={'dark-content'} />
      <Text>Trade Entry</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: ScaleSize.SPACING_20,
  },
});
