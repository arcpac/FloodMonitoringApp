import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({ text, handler, textDecor }) {
  return (
    <Pressable onPress={handler}>
      <View style={styles.button}>
        <Text style={[styles.buttonText, { fontWeight: textDecor }]}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0054A5", // Replace with your desired button color
    borderRadius: 20, // Adjust the radius to your preference
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});
