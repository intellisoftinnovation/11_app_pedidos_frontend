import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TotpInput = ({ code = '', onCodeChanged, onCodeFilled, css }) => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (code.length === 6) {
      setOtp(code.split(''));
    }
  }, [code]);

  const handleChange = (text, index) => {
    if (!/^[0-9]?$/.test(text)) return; // Solo permite números
    
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    onCodeChanged(newOtp.join(''));

    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every(digit => digit.length === 1)) {
      onCodeFilled(newOtp.join(''));
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={el => (inputRefs.current[index] = el)}
          style={[styles.input , css] }
          keyboardType="numeric"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          autoFocus={index === 0}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: 40,
    height: 50,
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 5,
    margin: 5,
  },
});

export default TotpInput;
