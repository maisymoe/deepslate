import { View } from "react-native";
import { HeaderSizes } from "@/constants";
import Header from "@components/Header";

export default function Settings() {
    return (
        <View style={{ flex: 1 }}>
            <Header size={HeaderSizes.LARGE}>TODO!</Header>
        </View>
    );
}
