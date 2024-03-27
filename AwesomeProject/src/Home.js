import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Import your custom home image
import homeIcon from './assets/home.png';
import searchIcon from './assets/search.png';
const Home = () => {
  return (
    <View style={styles.container}>
      {/* Your home screen content here */}

      {/* Menu bar */}
      <View style={styles.menuBar}>
        {/* Button 1 */}
        <TouchableOpacity style={styles.menuButton}>
          <Image source={searchIcon} style={styles.menuIcon} />
        </TouchableOpacity>
        {/* Button 2 */}
        <TouchableOpacity style={styles.menuButton}>
          <Image source={homeIcon} style={styles.menuIcon} />
        </TouchableOpacity>
        {/* Button 3 */}
        <TouchableOpacity style={[styles.menuButton, styles.centerButton]}>
          <Image source={homeIcon} style={[styles.menuIcon, styles.centerIcon]} />
        </TouchableOpacity>
        {/* Button 4 */}
        <TouchableOpacity style={styles.menuButton}>
          <Image source={homeIcon} style={styles.menuIcon} />
        </TouchableOpacity>
        {/* Button 5 */}
        <TouchableOpacity style={styles.menuButton}>
          <Image source={searchIcon} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  menuBar: {
    flexDirection: 'row',
    paddingBottom: 20,
    // backgroundColor: '#fff', // Set background color for menu bar
    // borderTopWidth: 1, // Add border on top
    borderTopColor: '#ccc', // Border color
  },
  menuButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  menuIcon: {
    width: 50,
    height: 50,
  },
  centerButton: {
    backgroundColor: 'lightblue',
    borderRadius: 35,
    width: 70,
    height: 75,
  },
  centerIcon: {
    width: 66,
    height: 66,
  },
});

export default Home;
