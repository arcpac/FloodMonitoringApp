import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

function Account() {
  const navigation = useNavigation();

  function accountDetailsHandler() {
    navigation.navigate("accountDetails");
  }

  return (
    <View>
      <Text>Account page</Text>
      <Pressable onPress={accountDetailsHandler}>
        <View>
          <Text style={styles.link}>Account Details</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Account;

const styles = StyleSheet.create({
  link: {
    textDecorationLine: "underline",
  },
});
