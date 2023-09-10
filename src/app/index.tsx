import { View } from "react-native";
import { HeaderSizes } from "@/constants";
import Header from "@components/Header";
import Text from "@components/Text";

export default function Home() {
    return (
        <View style={{ flex: 1 }}>
            <Header size={HeaderSizes.LARGE}>Hi there!</Header>
            <Text>This app will eventually be a MultiCraft client. As of now, it is merely a component demo.</Text>
        </View>
    );
}
