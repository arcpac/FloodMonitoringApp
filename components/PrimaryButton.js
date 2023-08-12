import { Button, Text, View } from "react-native";

function PrimaryButton({ children, onPress }) {
  return <Button onPress={onPress} title={children} />;
}

export default PrimaryButton;
