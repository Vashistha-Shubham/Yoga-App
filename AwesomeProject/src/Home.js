import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation(); 

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default Home;



// import React from 'react';
// import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// // Import your custom home image

// import homeIcon from './assets/home.png';
// import searchIcon from './assets/search.png';
// const Home = () => {
//   const navigation = useNavigation(); // Initialize navigation
//   const handleNavigateToMainPage = () => {
//     navigation.navigate('MainPage'); // Navigate to 'MainPage' when the button is pressed
//   };

//   return (
//     <View style={styles.container}>
//       {/* Your home screen content here */}
//       {/* Menu bar */}
//       <View style={styles.menuBar}>
//         {/* Button 1 */}
//         <TouchableOpacity onPress={handleNavigateToMainPage} style={styles.menuButton}>
//           <Image source={searchIcon} style={styles.menuIcon} />
//         </TouchableOpacity>
//         {/* Button 2 */}
//         <TouchableOpacity onPress={handleNavigateToMainPage} style={styles.menuButton}>
//           <Image source={homeIcon} style={styles.menuIcon} />
//         </TouchableOpacity>
//         {/* Button 3 */}
//         <TouchableOpacity onPress={handleNavigateToMainPage} style={[styles.menuButton, styles.centerButton]}>
//           <Image source={homeIcon} style={[styles.menuIcon, styles.centerIcon]} />
//         </TouchableOpacity>
//         {/* Button 4 */}
//         <TouchableOpacity onPress={handleNavigateToMainPage} style={styles.menuButton}>
//           <Image source={homeIcon} style={styles.menuIcon} />
//         </TouchableOpacity>
//         {/* Button 5 */}
//         <TouchableOpacity onPress={handleNavigateToMainPage} style={styles.menuButton}>
//           <Image source={searchIcon} style={styles.menuIcon} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   menuBar: {
//     flexDirection: 'row',
//     paddingBottom: 10,
//     // backgroundColor: '#fff', // Set background color for menu bar
//     // borderTopWidth: 1, // Add border on top
//     borderTopColor: '#ccc', // Border color
//   },
//   menuButton: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 0,
//   },
//   menuIcon: {
//     width: 50,
//     height: 50,
//   },
//   // centerButton: {
//   //   backgroundColor: 'lightblue',
//   //   borderRadius: 35,
//   //   width: 70,
//   //   height: 75,
//   // },
//   centerIcon: {
//     width: 50,
//     height: 50,
//   },
//   // description: {
//   //   alignItems: 'center',
//   //   padding: 20,
//   //   fontSize: 18,
//   //   marginBottom: 20,
//   // },
// });

// export default Home;
