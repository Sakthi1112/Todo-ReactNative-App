import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';




export default function ToolItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={20} color='#333' ></MaterialIcons>
      <Text style={styles.itemText} >{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginTop: 16,
    flexDirection: 'row',
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  itemText:{
    marginLeft:10
  }
});
