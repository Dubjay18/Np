import {Dimensions, ScrollView, Text, View} from "react-native";
import {Card} from "react-native-paper";
import Spacer from "@/components/Spacer";

const DimensionsWindowWidth = Dimensions.get("window").width;
export default function CategoryCol() {
    const news = [{
        writer: "Matt Villano",
        title: "Crypto investors should be prepared to lose all their money, BOE governor says",
        image: "https://picsum.photos/700",
        date: "2021-07-13",

    },
        {
            writer: "Matt Donovan",
            title: "Crypto investors should be prepared to lose all their money, BOE governor says",
            image: "https://picsum.photos/700",
            date: "2021-07-13",

        },
        {
            writer: "Damon Salvatore",
            title: "Crypto investors should be prepared to lose all their money, BOE governor says",
            image: "https://picsum.photos/700",
            date: "2021-07-13",

        }, {
            writer: "cole Salvatore",
            title: "Crypto investors should be prepared to lose all their money, BOE governor says",
            image: "https://picsum.photos/700",
            date: "2021-07-13",

        }

    ]
    const styles = {
        writer: {
            color: "white"
        },
        title: {
            fontSize: 24,
            color: "white"

        },
        slide: {
            padding: 10,
            width: DimensionsWindowWidth,

        },
    }
    return (
        <>
            <ScrollView>
                {
                    news.map((news, index) => {
                        return (
                            <View key={index} style={styles.slide}>
                                <Card style={{
                                    height: 200,
                                    width: "90%",
                                    position: "relative"
                                }}>
                                    <View style={{
                                        position: "absolute",
                                        top: 30,
                                        left: 10,
                                        zIndex: 2,
                                        width: "90%"
                                    }}>

                                        <Text style={styles.title}>{news.title}</Text>

                                        <Spacer size={60}/>

                                        <View style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            width: "90%",
                                            marginTop: 30

                                        }}>

                                            <Text style={styles.writer}>{news.writer}</Text>
                                            <Text style={{
                                                color: "white",
                                            }}>{
                                                news.date
                                            }</Text>
                                        </View>

                                    </View>
                                    <Card.Cover source={{uri: news.image}} style={{
                                        height: 200,
                                        borderRadius: 10

                                    }}/>
                                </Card>
                            </View>
                        )
                    })
                }

            </ScrollView>
        </>
    );
}