import FontAwesome from '@expo/vector-icons/FontAwesome';
import {DarkTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack, useRouter} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

import {useColorScheme} from '@/components/useColorScheme';
import {Appbar, DefaultTheme, PaperProvider, useTheme} from "react-native-paper";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Image, TouchableOpacity, StyleSheet, View, ImageBackground} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav/>;
}
const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
        ...DefaultTheme.colors,
        myOwnColor: '#BADA55',
        primary: 'rgb(10, 132, 255)',
        background: 'rgb(1, 1, 1)',
        card: 'rgb(18, 18, 18)',
        text: 'rgb(255,255,255)',
        border: 'rgb(10, 132, 255)',
        notification: 'rgb(255, 69, 58)',
        onSurfaceVariant: 'rgb(255,255,255)',
        outline: 'rgb(10, 132, 255)',
    },
};
export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();

function RootLayoutNav() {
    const colorScheme = useColorScheme();
    const router = useRouter()
    const {colors} = useAppTheme();

    return (
        <GestureHandlerRootView style={{
            flex: 1,

        }}>
            <BottomSheetModalProvider>
                <PaperProvider theme={theme}>
                    <Stack
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: colors.background,
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        }}
                    >
                        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                        <Stack.Screen name="search" options={{
                            title: "",
                            headerShown: false,
                        }}
                        />
                        <Stack.Screen name={"[newsId]"} options={{
                            title: "",
                            headerTransparent: true,
                            headerStyle: {
                                backgroundColor: 'transparent',

                            },
                            header: () =>
                                (
                                    <View style={{height: 400}}>

                                        <TouchableOpacity
                                            onPress={() => router.back()}
                                            style={{
                                                backgroundColor: "rgba(245, 245, 245, 0.5)",
                                                padding: 10,
                                                position: 'absolute', left: 30, top: 40,
                                                borderRadius: 10,

                                            }}>

                                            <Ionicons name={"chevron-back"} size={24} color={colors.text}

                                            />
                                        </TouchableOpacity>


                                    </View>
                                ),

                        }}
                        />
                    </Stack>
                </PaperProvider>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>

    );
}
