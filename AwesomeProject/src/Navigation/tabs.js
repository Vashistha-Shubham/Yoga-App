import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home';
import MainPage from '../MainPage';
import MainPage1 from '../MainPage1';
import MainPage2 from '../MainPage2';
import MainPage3 from '../MainPage3';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    showLabel: false,
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 12,
                        left: 15
                        ,
                        right: 15,
                        elevation: 0,
                        backgroundColor: '#ffffff',
                        borderRadius: 20,
                        height: 70,
                        ...styles.shadow
                    }
                }}>
                <Tab.Screen name='Home' component={Home} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../assets/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#032f45' : '#748c94',
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#032f45' : '#748c94', fontSize: 10 }}>
                                </Text>
                        </View>
                    )
                }} />

                <Tab.Screen name='Mainpage' component={MainPage}  options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../assets/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#032f45' : '#748c94',
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#032f45' : '#748c94', fontSize: 10 }}>
                                </Text>
                        </View>
                    )
                }} />
                <Tab.Screen name='Mainpage1' component={MainPage1}  options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../assets/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#032f45' : '#748c94',
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#032f45' : '#748c94', fontSize: 10 }}>
                                </Text>
                        </View>
                    )
                }} />
                <Tab.Screen name='Mainpage2' component={MainPage2}  options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../assets/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#032f45' : '#748c94',
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#032f45' : '#748c94', fontSize: 10 }}>
                                </Text>
                        </View>
                    )
                }} />
                <Tab.Screen name='Mainpage3' component={MainPage3}  options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../assets/search.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#032f45' : '#748c94',
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#032f45' : '#748c94', fontSize: 10 }}>
                                </Text>
                        </View>
                    )
                }} />
            </Tab.Navigator>
        </>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.90,
        shadowRadius: 3.5,
        elevation: 15
    }
});

export default Tabs;
