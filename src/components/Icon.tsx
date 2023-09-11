import { Image, ImageProps } from "react-native";
import { Icons } from "@/constants";

interface IconProps extends Omit<ImageProps, "source" | "width" | "height"> {
    icon: keyof typeof Icons;
    width?: number;
    height?: number;
}

export default (props: IconProps) => (
    <Image {...props} style={[{ width: props.width ?? 32, height: props.height ?? 32 }, props.style]} source={Icons[props.icon]} />
)
