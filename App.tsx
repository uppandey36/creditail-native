import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Animated,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  Easing
} from 'react-native';

import {styles} from './styles';

function App(): JSX.Element {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height

  const availableOptions = [
    'Home',
    'Feature',
    'Galery',
    'Portfolio',
    'Pages',
    'Contact',
    'Close',
  ];

  const rotateAngle = useRef(new Animated.Value(0)).current;

  const [selectedNav, setSelectedNav] = useState('Home');
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(()=>{
    Animated.timing(rotateAngle, {
      toValue: isNavOpen ? 1 : 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  },[isNavOpen])

  const onIndividualNavClick = (item: string) => {
    if (item === 'Close') {
      return onHamburgerClickOpen();
    }
    onHamburgerClickOpen()
    setSelectedNav(item);
  };

  const onHamburgerClickOpen = () => {
    setIsNavOpen(pre => !pre);
  };

  const doorRotation = rotateAngle.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const doorTransation = rotateAngle.interpolate({
    inputRange: [0, 1],
    outputRange: [0, - width / 8]
  })

  return (
    <View style={[styles.flex1]}>
      <ImageBackground
        style={styles.flex1}
        source={{
          uri: 'https://images.unsplash.com/photo-1617634795446-b58c985ec639?q=80&w=3436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}>
        <View
          style={[
            styles.alignEnd,
            styles.flex1,
            styles.justifyBetween,
            styles.width100,
            styles.navContainer,
          ]}>
          {availableOptions?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={1}
                onPress={() => onIndividualNavClick(item)}>
                <Text
                  style={[
                    styles.menuIndividual,
                    {color: selectedNav === item ? '#e44d37' : 'white'},
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Animated.View
          style={[
            styles.upperSection,
            {
              transform: [
                {translateX: doorTransation},
                {rotateY: doorRotation},
                {perspective: 850},
              ],
            },
          ]}>
          <TouchableOpacity
            onPress={() => onHamburgerClickOpen()}
            activeOpacity={1}
            style={[
              styles.flexRow,
              styles.headerTop,
              styles.justifyEnd,
            ]}>
            <Image
              width={30}
              height={30}
              source={{
                uri: !isNavOpen
                  ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png'
                  : 'https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png',
              }}
            />
          </TouchableOpacity>
          <Image width={width} height = {height / 2} source={{uri: 'https://g5d2h4c6.rocketcdn.me/wp-content/uploads/Forest-Fact-1-photoshop-original.png'}} />
        </Animated.View>
      </ImageBackground>
    </View>
  );
}

export default App;
