import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

type CustomCheckboxProps = {
  label: string;
  onValueChange?: (value: boolean) => void;
  initialValue?: boolean;
};

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  onValueChange,
  initialValue = false,
}) => {
  const [checked, setChecked] = useState(initialValue);

  const handlePress = () => {
    setChecked(!checked);
    if (onValueChange) {
      onValueChange(!checked);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && (
          <Image
            source={require('../../assets/checkmark.png')} 
            style={styles.checkmark}
          />
        )}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#A3CFFF', 
  },
  checkmark: {
    width: 18,
    height: 18,
    tintColor: 'white', 
  },
  label: {
    fontSize: 16,
    color: '#000', 
  },
});

export default CustomCheckbox;
