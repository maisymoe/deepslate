import { View, StyleSheet } from "react-native";
import { Colors, HeaderSizes, Icons } from "@/constants";
import Text from "@components/Text";
import Header from "@components/Header";
import Icon from "@components/Icon";

interface RowProps {
    label: string;
    subLabel?: string;
    icon?: keyof typeof Icons;
}

export default (props: RowProps) => (
    <View style={styles.borderOuter}>
        <View style={[styles.borderInner, styles.container]}>
            {props.icon && <Icon icon={props.icon} width={48} height={48} />}
            <View style={{ flexDirection: "column" }}>
                <Header size={HeaderSizes.SMALL}>{props.label}</Header>
                {props.subLabel && <Text style={{ color: Colors.TEXT_MUTED }}>{props.subLabel}</Text>}
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    borderOuter: {
        borderColor: Colors.BORDER_TERTIARY,
        borderWidth: 2,
        backgroundColor: Colors.BORDER_TERTIARY,
        verticalAlign: "middle"
    },
    borderInner: {
        backgroundColor: Colors.BACKGROUND_PRIMARY,
        borderTopColor: Colors.BORDER_PRIMARY,
        borderRightColor: Colors.BORDER_PRIMARY,
        borderLeftColor: Colors.BORDER_PRIMARY,
        borderBottomColor: Colors.BORDER_SECONDARY,
        borderWidth: 2,
    },
    container: {
        padding: 4,
        gap: 8,
        flexDirection: "row",
        alignItems: "center"
    }
});
