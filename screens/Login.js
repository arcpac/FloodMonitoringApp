import { useState } from "react";
import {
  Button,
  Image,
  Keyboard,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function Login({ navigation, loginValidate }) {
  const [isShowing, setShowing] = useState(false);

  function onLoginValidate() {
    // backend here
    // loginValidate(true);
    navigation.navigate("Overview")
  }
  function keyboardDidShow() {
    setShowing(true);
  }
  function keyboardDidHide() {
    setShowing(false);
  }

  Keyboard.addListener("keyboardDidShow", keyboardDidShow);
  Keyboard.addListener("keyboardDidHide", keyboardDidHide);

  const onkeyboardStyle = StyleSheet.create({
    buttonContainer: {
      paddingTop: !isShowing ? 50 : 20,
    },
    formContainer: {
      flex: !isShowing ? 1 : 2,
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <View style={[styles.logoContainer, {marginTop: isShowing ? 40 : 80, flex: isShowing ? 0.5 : 1}]}>
        <Image
          style={styles.image}
          source={require("../assets/images/wave.png")}
        />
      </View>

      <View style={[styles.formContainer, onkeyboardStyle.formContainer]}>
        <View style={styles.inputContainer}>
          <View style={styles.centerTextContainer}>
            <Text style={styles.text}>SIGN IN</Text>
          </View>
          <View>
            <TextInput style={styles.input} placeholder="Username"></TextInput>
          </View>
          <View>
            <TextInput style={styles.input} placeholder="Password"></TextInput>
          </View>
          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </View>
          <View style={onkeyboardStyle.buttonContainer}>
            <Pressable onPress={onLoginValidate}>
              <PrimaryButton
                text="Log In"
                handler={onLoginValidate}
                textDecor="bold"
              />
            </Pressable>
          </View>
        </View>
      </View>
      {!isShowing && (
        <View style={styles.footerContainer}>
          <View>
            <Text style={styles.footerText}>Developed by AzTech</Text>
            <View style={styles.footerImageContainer}></View>
          </View>
        </View>
      )}
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  //logo
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  //form
  formContainer: {
    paddingBottom: 9,
    paddingHorizontal: 40,
  },
  inputContainer: {
    flex: 1,
    padding: 10,
  },
  centerTextContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: "#0054A5",
  },
  forgotPasswordContainer: {
    paddingLeft: 10,
    marginLeft: 10,
  },
  forgotPassword: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#0054A5",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    borderColor: "#9FA2A4",
    borderRadius: 8,
    padding: 10,
  },

  link: {
    textDecorationLine: "underline",
  },
  footerContainer: {
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerImageContainer: {
    alignItems: "center",
  },
  footerImage: {
    width: 50, // Adjust the image width as needed
    height: 50, // Adjust the image height as needed
  },
  footerText: {
    color: "#A8ACAE",
  },
});
