import { Text, TextProps } from "react-native";

export default (props: TextProps) => (
    <Text {...props} style={[{ fontFamily: "Mojangles", letterSpacing: 0.1, color: "#fff" }, props.style]}></Text>
)
