import {View} from "react-native";

export default function Spacer({
    horizontal=false,
    size
                               }:{
    horizontal?: boolean;
    size: number;
}){
    const defaultValue = 'auto';
    return (
        <View
        style={{
            width: horizontal ? size : defaultValue,
            height: horizontal ? defaultValue : size,
        }}
        />
    )
}