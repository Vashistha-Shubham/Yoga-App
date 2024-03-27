
import React, { Children } from 'react';
import { View, Text, ImageBackground } from 'react-native';

const Background = ({Children}) => {
  return (
    <View>
      <View>
      <ImageBackground source={require("./assets/yoga.png")}
      style={{height: '100%'}} />
      </View>
        <View>
        {Children}
        </View>
    </View>
  );
}

export default Background;