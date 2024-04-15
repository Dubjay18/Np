import {Image, Text, View} from "react-native";
import {useAppTheme} from "@/app/_layout";
import {StatusBar} from "expo-status-bar";

export default function NewsId() {
    const {colors} = useAppTheme();

    const styles = {
        container: {
            flex: 1,
            backgroundColor: colors.background,
        }


    }
    return (
        <View style={styles.container}>
            <StatusBar style="light"/>

            <Text>NewsId</Text>
        </View>
    );
}

