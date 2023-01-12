import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: width,
  },
  image: {
    height: "100%",
    width: 150,
    marginHorizontal: 15,
  },
});

export default styles;
