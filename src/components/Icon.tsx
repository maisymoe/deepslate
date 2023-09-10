import { Image, ImageProps } from "react-native";
import { icons } from "@/constants";

interface IconProps extends Omit<ImageProps, "source" | "width" | "height"> {
    icon: keyof typeof icons;
    width?: number;
    height?: number;
}

export default (props: IconProps) => (
    <Image {...props} style={[{ width: props.width ?? 32, height: props.height ?? 32 }, props.style]} source={icons[props.icon]} />
)
