import { Text, TextProps } from "react-native";

export default (props: TextProps) => (
    <Text {...props} style={[{ fontFamily: "Minecraft-Seven", letterSpacing: 0.2, color: "#fff" }, props.style]}></Text>
)
