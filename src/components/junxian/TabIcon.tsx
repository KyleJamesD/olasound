import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

type TabIconParamsType = {
  route: string;
  size: number;
  color: string;
  focused: boolean;
};

function TabIcon(params: TabIconParamsType): React.JSX.Element {
  const { route, size, color, focused } = params;

  const getIconSource = (routeName: string) => {
    switch (routeName) {
      case 'HomeNav':
        return require('../../../assets/icons/home.png');
      case 'SearchNav':
        return require('../../../assets/icons/search.png');
      case 'LibraryNav':
        return require('../../../assets/icons/library.png');
      case 'ProfileNav':
        return require('../../../assets/icons/profile.png');
    }
  };

  return (
    <View
      style={[style.iconView,
        {
          borderWidth: focused ? 1 : 0,
          borderColor: focused ? color : '#fff', 
          backgroundColor: focused ? color : '#fff', }
      ]}
    >
      <Image
        style={[style.iconImg,{
            height: size,
            width: size,
          },
        ]}
        source={getIconSource(route)}
        alt="Tab Icon"
      />
    </View>
  );
}

const style = StyleSheet.create({
  iconView: {
    borderRadius: 50,
    overflow: 'hidden',
    padding: 3,
  },
  iconImg: {
    resizeMode: 'contain',
  },
});

export default TabIcon;
