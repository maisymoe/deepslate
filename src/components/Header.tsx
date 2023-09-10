import { TextStyle } from "react-native";
import { HeaderSizes } from "@/constants";
import Text from "@components/Text";

interface HeaderProps {
    size: HeaderSizes
    style?: TextStyle,
    children: string;
}

export default (props: HeaderProps) => (
    <Text style={[{ fontSize: props.size }, props.style]}>{props.children}</Text>
)
