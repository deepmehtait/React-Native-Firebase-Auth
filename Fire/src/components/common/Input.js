import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({
  lable,
  onChangeText,
  placeholder,
  secureEntry,
  value }) => {
  const { containerStyle, inputStyle, lableStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={lableStyle}>{lable}</Text>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={inputStyle}
        secureTextEntry={secureEntry}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    color: '#000000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 2,
  },
  lableStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  }
};
export { Input };
