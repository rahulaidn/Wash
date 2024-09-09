import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {WelcomeScreenNavigationProp} from '../../types/types';
import CustomButton from '../../components/custom/custom-button/CustomButton';

// Get device screen dimensions
const {width, height} = Dimensions.get('window');

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Main logo */}
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
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

      {/* Welcome message */}
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Sparkle & Shine {'\n'} Transform Your Drive with Every Wash!
        </Text>
      </View>

      {/* Button to start */}
      <CustomButton
        title="Let's start"
        backgroundColor="#A3CFFF"
        textColor="#092A4D"
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
        onPress={() => navigation.navigate('SignUp')}
      />

      {/* Existing user prompt */}
      <View style={styles.existingUserContainer}>
        <Text style={styles.existingUserText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 1.8,
    height: height * 0.3,
    resizeMode: 'contain',
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: -20,
    width: width * 0.6,
    height: width * 0.6,
    resizeMode: 'contain',
  },
  topRight: {
    position: 'absolute',
    top: 0,
    right: -30,
    width: width * 0.45,
    height: width * 0.5,
    resizeMode: 'contain',
  },
  messageContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  messageText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'gray',
  },
  button: {
    borderWidth: 1,
    borderColor: '#94C7FF',
    width: width * 0.7,
    marginTop: 80,
    backgroundColor: '#A3CFFF',
    elevation: 8,
    shadowColor: '#A3CFFF',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.4,
    shadowRadius: 16,
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  existingUserContainer: {
    flexDirection: 'row',
  },
  existingUserText: {
    fontSize: 14,
    color:'gray'
  },
  signInText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 14,
    color:'black'
  },
});

export default WelcomeScreen;
