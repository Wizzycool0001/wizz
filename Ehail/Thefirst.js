import { View, Text, ScrollView, TouchableOpacity,} from "react-native";
import { BottomSheet } from "@gorhom/bottom-sheet";

export default first = ()=> {
  return (
    <View>
      <BottomSheet>
        <Text>This is your bottom sheet content.</Text>
      </BottomSheet>
    </View>
  );
};