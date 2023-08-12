import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function Login({ navigation, loginValidate }) {
  function onLoginValidate() {
    // backend here
    loginValidate(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text>Logo</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text>Sign in</Text>
        <View>
          <TextInput placeholder="Username"></TextInput>
        </View>
        <View>
          <TextInput placeholder="Password"></TextInput>
        </View>
        <Text>Forgot password?</Text>
        <View>
          <Button title="Login" onPress={onLoginValidate} />
        </View>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    flexDirection: "column",
  },
  inputContainer: {
    flex: 1,
    borderWidth: 2,
  },
  logoContainer: {
    flex: 1,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    borderWidth: 1,
    borderRadius: 30,
    padding: 5,
  },
});
