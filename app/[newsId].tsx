import {Image, ImageBackground, Text, View} from "react-native";
import {useAppTheme} from "@/app/_layout";
import {StatusBar} from "expo-status-bar";
import {Card, FAB} from "react-native-paper";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedScrollHandler,
} from 'react-native-reanimated';
import NewSheet from "@/components/NewSheet";
import {Ionicons} from "@expo/vector-icons";

export default function NewsId() {
    const {colors} = useAppTheme();
    const translationY = useSharedValue(0);
    const height = useSharedValue(500)
    const marginTop = useSharedValue(-200)


    const scrollHandler = useAnimatedScrollHandler((event) => {
        translationY.value = event.contentOffset.y;
        height.value = 500 - event.contentOffset.y;

        marginTop.value = -200 + event.contentOffset.y

    });

    const stylez = useAnimatedStyle(() => {
        return {
            marginTop: marginTop.value
        };
    });
    const stylezz = useAnimatedStyle(() => {
        return {
            height: height.value
        };
    });

    const styles = {
        container: {
            flex: 1,
            backgroundColor: colors.background,

        },
        fab: {
            position: 'absolute',

            right: 0,
            bottom: 0,
        },

    }
    return (
        <View style={styles.container}>
            <StatusBar style="light"/>
            <FAB
                icon={() => <Ionicons name="heart-outline" size={24} color="white"/>}
                style={{
                    position: 'absolute',
                    bottom: 60,
                    right: 30,
                    zIndex: 20,
                    borderRadius: 50,
                    backgroundColor: colors.primary,

                }}
                onPress={() => console.log('Pressed')}
            />
            <Animated.Image source={require("../assets/images/bg-pic.png")}
                            resizeMode="cover" style={[{

                width: "100%",
                minHeight: 290,

            }, stylezz]}/>


            <View style={{
                marginTop: -200,
                zIndex: 10
            }}>

                <Card style={{
                    backgroundColor: "rgba(245, 245, 245,  1)",
                    width: "70%",
                    marginHorizontal: 50,
                    padding: 30,
                    zIndex: 10


                }}>
                    <Text>jdaankjfndjnf</Text>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "black",
                        zIndex: 10
                    }}>Crypto investors should be prepared to lose all their money, BOE governor says</Text>
                    <Text style={{
                        marginTop: 10,
                        zIndex: 10
                    }}>Published by Ryan Browne</Text>
                </Card>
            </View>
            {/*<NewSheet/>*/}
            <View style={{

                backgroundColor: "white",
                overflow: "hidden",
                borderTopRightRadius: 50,
                borderTopLeftRadius: 50,
                paddingTop: 60,
                marginTop: -30,
                paddingBottom: 230,
                paddingLeft: 10,
                paddingRight: 10


            }}>
                <Animated.ScrollView
                    style={{
                        width: "100%",
                        height: 550,

                        borderTopRightRadius: 50,
                        borderTopLeftRadius: 50,


                    }}
                    onScroll={scrollHandler}
                    scrollEventThrottle={26}>
                    <Text style={{

                        fontSize: 20,
                        textAlign: "center"
                    }}>

                        In a strong statement, Bank of England Governor Andrew Bailey reiterated his cautionary stance
                        on cryptocurrencies, urging investors to be prepared for the possibility of losing their entire
                        investment.

                        Governor Bailey emphasized that crypto assets, unlike traditional currencies, lack "intrinsic
                        value," meaning they don't hold inherent worth based on any physical commodity or government
                        backing. While their value can fluctuate significantly, he warned, there's a chance it could
                        plummet to zero.

                        This isn't the first time Governor Bailey has sounded the alarm on cryptocurrencies. He has
                        consistently expressed concerns about their volatility and their potential risk to financial
                        stability.

                        The Governor's comments come amidst a period of uncertainty for the cryptocurrency market. After
                        a period of rapid growth, many digital currencies have experienced significant price drops in
                        recent months.

                        Bailey's remarks have sparked debate within the financial community. Proponents of
                        cryptocurrency argue that the technology behind it holds promise for the future of finance.
                        However, they acknowledge the inherent risks associated with such a nascent asset class.

                        The Bank of England, along with other financial regulators worldwide, is closely monitoring the
                        development of cryptocurrencies. As the market continues to evolve, regulators are likely to
                        introduce stricter regulations to mitigate potential risks.

                        For crypto investors, Governor Bailey's message is clear: invest cautiously and be aware of the
                        very real possibility of losing your entire investment.
                        For crypto investors, Governor Bailey's message is clear: invest cautiously and be aware of the
                        very real possibility of losing your entire investment. For crypto investors, Governor Bailey's
                        message is clear: invest cautiously and be aware of the
                        very real possibility of losing your entire investment. For crypto investors, Governor Bailey's
                        message is clear: invest cautiously and be aware of the
                        very real possibility of losing your entire investment.
                    </Text>
                </Animated.ScrollView>

            </View>

        </View>
    );
}

