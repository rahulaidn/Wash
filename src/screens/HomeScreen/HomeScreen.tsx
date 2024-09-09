import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { HomeScreenNavigationProp, HomeScreenRouteProp } from '../../types/types';
import CustomButton from '../../components/custom/custom-button/CustomButton';

const { width, height } = Dimensions.get('window');

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp; 
};

const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
  const { userName } = route.params || {}; 

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Main logo */}
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>

      {/* Welcome message */}
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Welcome {userName ? userName : 'Guest'}
        </Text>
      </View>

      {/* Button to start */}
      <CustomButton
        title="Logout"
        backgroundColor="#A3CFFF"
        textColor="#092A4D"
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
        onPress={() => navigation.navigate('Welcome')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container: {},
  logo: {
    width: width * 1.8,
    height: height * 0.2,
    resizeMode: 'contain',
  },
  messageContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  messageText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
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
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default HomeScreen;
