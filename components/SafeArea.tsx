import {View} from "react-native";
import {SafeAreaProvider, useSafeAreaInsets} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";

export default function SafeArea({
                                     children,
                                     style
                                 }: {
    children: React.ReactNode;
    style?: any;
}) {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaProvider>
            <StatusBar style="light"/>
            <View style={{
                ...style,
                flex: 1,
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}>
                {children}
            </View>
        </SafeAreaProvider>
    )
}