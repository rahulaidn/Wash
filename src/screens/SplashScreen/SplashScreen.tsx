import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {SplashScreenNavigationProp} from '../../types/types';


const {width, height} = Dimensions.get('window');

type Props = {
  navigation: SplashScreenNavigationProp;
};

const SplashScreen: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 3000); 
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />

        {/* Image at Top-Left */}
        <Image
          source={require('../../assets/topLeftLogo.png')}
          style={styles.topLeft}
        />

        {/* Image at Top-Right */}
        <Image
          source={require('../../assets/topRightLogo.png')}
          style={styles.topRight}
        />

        {/* Image at Bottom-Right */}
        <Image
          source={require('../../assets/bottomRightLogo.png')}
          style={styles.bottomRight}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
  logo: {
    width: width * 1.8,
    height: height * 0.4,
    resizeMode: 'contain',
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'contain',
  },
  topRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    resizeMode: 'contain',
  },
  bottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: width * 0.7,
    height: width * 0.7,
    resizeMode: 'cover',
  },
});

export default SplashScreen;
