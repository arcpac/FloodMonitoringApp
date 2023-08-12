import { Text, View } from "react-native";

function ProtectionUnit({ route }) {
  console.log(route.params.protectionUnits);
  return (
    <View>
      <Text>Protection Units</Text>
    </View>
  );
}

export default ProtectionUnit;
