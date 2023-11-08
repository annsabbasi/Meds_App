import React from "react";
import { View, StyleSheet, SafeAreaView, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const BUTTON_COLOR = "rgb(8,212,198)";


const Logo = () => (
  <View>
    <Image
      source={require('../assets/health-logo.jpg')}
      style={styles.logo} />
  </View>
);

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.text1}>Heal Me Healthy</Text>
    <Text style={styles.text2}>
      Discover holistic {'\n'} remedies for all your {'\n'} ailments with just a {'\n'} search
    </Text>
  </View>
);

const Button = () => {
  const navigation = useNavigation();
  const handlenavigation = () => {
    navigation.navigate('OnBoarding')
  };
  return (
    <View style={styles.buttonMain}>
      <TouchableOpacity style={styles.button} onPress={handlenavigation}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const GetStarted = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Header />
      <Button />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  logo: {
    width: 330,
    height: 330,
  },
  header: {
    alignItems: "center",
  },
  text1: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 35,
    marginTop: 15,
  },
  text2: {
    textAlign: "center",
    marginTop: 30,
    color: "#36454F",
    paddingHorizontal: 100,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 26,
    letterSpacing: 1.5,
  },
  buttonMain: {
    width: 300,
    marginTop: 25,
    width: '90%'
  },
  button: {
    backgroundColor: BUTTON_COLOR,
    padding: 20,
    borderRadius: 30,
    fontWeight: "900",
  },
  buttonText: {
    color: "white",
    fontWeight: "900",
    textAlign: "center",
  },
});

export default GetStarted;
