import { View } from "react-native";
import { HeaderSizes } from "@/constants";
import Header from "@components/Header";
import Text from "@components/Text";
import Row from "@/components/Row";

export default function Home() {
    return (
        <View style={{ flex: 1, padding: 8 }}>
            <View style={{ marginBottom: 8 }}>
                <Header size={HeaderSizes.LARGE}>Hi there!</Header>
                <Text>This app will eventually be a MultiCraft client. As of now, it is merely a component demo.</Text>
            </View>
            <View style={{ flexDirection: "column", gap: 4 }}>
                <Row label="This is a row." />
                <Row label="This is also a row." subLabel="Rows can have sub-labels!" />
                <Row label="This has an icon!" icon="CraftingTable" />
                <Row label="This row has it all!" subLabel="How lucky..." icon="RedstoneLamp" />
            </View>
        </View>
    );
}
