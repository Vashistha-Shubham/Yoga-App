import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const MainPage = () => {
  const [showContentArray, setShowContentArray] = useState([false, false, false, false]); // Separate state for each view

  const toggleContentVisibility = (index) => {
    setShowContentArray(prevState =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/* First View */}
      <View style={styles.container}>
        <Text style={styles.title}>Main Page 1</Text>
        <Text style={styles.description}>This is the description for Main Page 1.</Text>
        <Image
          source={require("./assets/image1.jpg")} // Replace with your image URI
          style={[styles.image, { borderColor: 'black' }]} // Add black border
        />
        {showContentArray[0] && (
          <View style={styles.content}>
            <Text>Additional content after the image klwjdfioaewjfioewhfewu9n fkjlewn eihfnewiuf ewkjnfiuewhfioew niuewnfoew</Text>
          </View>
        )}
        <TouchableOpacity onPress={() => toggleContentVisibility(0)} style={styles.button}>
          <Text>{showContentArray[0] ? 'Hide' : 'Show'} Content</Text>
        </TouchableOpacity>
      </View>

      {/* Second View */}
      <View style={styles.container}>
        <Text style={styles.title}>Main Page 2</Text>
        <Text style={styles.description}>This is the description for Main Page 2.</Text>
        <Image
          source={require("./assets/image2.jpg")} // Replace with your image URI
          style={[styles.image, { borderColor: 'black' }]} // Add black border
        />
        {showContentArray[1] && (
          <View style={styles.content}>
            <Text>Additional content after the image</Text>
          </View>
        )}
        <TouchableOpacity onPress={() => toggleContentVisibility(0)} style={styles.button}>
          <Text>{showContentArray[1] ? 'Hide' : 'Show'} Content</Text>
        </TouchableOpacity>
      </View>

      {/* Third View */}
      <View style={styles.container}>
        <Text style={styles.title}>Main Page 3</Text>
        <Text style={styles.description}>This is the description for Main Page 3.</Text>
        <Image
          source={require("./assets/image3.jpg")} // Replace with your image URI
          style={[styles.image, { borderColor: 'black' }]} // Add black border
        />
        {showContentArray[2] && (
          <View style={styles.content}>
            <Text>Additional content after the image</Text>
          </View>
        )}
        <TouchableOpacity onPress={() => toggleContentVisibility(2)} style={styles.button}>
          <Text>{showContentArray[2] ? 'Hide' : 'Show'} Content</Text>
        </TouchableOpacity>
      </View>

      {/* Fourth View */}
      <View style={styles.container}>
        <Text style={styles.title}>Main Page 4</Text>
        <Text style={styles.description}>This is the description for Main Page 4.</Text>
        <Image
          source={require("./assets/image4.jpg")} // Replace with your image URI
          style={[styles.image, { borderColor: 'black' }]} // Add black border
        />
        {showContentArray[3] && (
          <View style={styles.content}>
            <Text>Additional content after the image</Text>
          </View>
        )}
        <TouchableOpacity onPress={() => toggleContentVisibility(3)} style={styles.button}>
          <Text>{showContentArray[3] ? 'Hide' : 'Show'} Content</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: 'center',
  },
  container: {
    width: '95%',
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
    borderWidth: 1,
    borderRadius: 15,
  },
  content: {
    backgroundColor: '#ccc',
    padding: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 3,
    marginTop: 3,
    alignItems: 'center',
    borderRadius: 15,
  },
});

export default MainPage;
