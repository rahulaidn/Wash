import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, TextInputProps } from 'react-native';

type CustomTextInputProps = TextInputProps & {
  iconImage?: any; 
  iconPosition?: 'left' | 'right'; 
  secureTextEntry?: boolean; 
};

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  iconImage,
  iconPosition = 'left',
  secureTextEntry = false,
  style,
  ...props
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false); 

  return (
    <View style={[styles.container, style]}>
      {iconImage && iconPosition === 'left' && (
        <Image source={iconImage} style={styles.iconImage} />
      )}

      <TextInput
        style={[styles.textInput, iconImage ? styles.textWithIcon : null]}
        secureTextEntry={secureTextEntry && !isPasswordVisible} 
        {...props}
      />

      {/* Toggle Password Visibility Icon */}
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
          <Image
            source={isPasswordVisible
              ? require('../../../assets/eye-open.png') 
              : require('../../../assets/eye-closed.png') 
            }
            style={styles.eyeIcon}
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}

      {iconImage && iconPosition === 'right' && (
        <Image source={iconImage} style={styles.iconImageRight} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color:'black'
  },
  textWithIcon: {
    marginLeft: 10, 
  },
  iconImage: {
    width: 18,
    height: 18,
    marginRight: 0,
  },
  iconImageRight: {
    width: 22,
    height: 22,
    marginLeft: 10,
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
});

export default CustomTextInput;
