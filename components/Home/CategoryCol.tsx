import {Dimensions, ScrollView, Text, View} from "react-native";
import {Card} from "react-native-paper";
import Spacer from "@/components/Spacer";
import NewsCard from "@/components/NewsCard";

const DimensionsWindowWidth = Dimensions.get("window").width;
export default function CategoryCol() {
    const news = [{
        id: 1,
        writer: "Matt Villano",
        title: "Crypto investors should be prepared to lose all their money, BOE governor says",
        image: "https://picsum.photos/700",
        date: "2021-07-13",

    },
        {
            id: 2,
            writer: "Matt Donovan",
            title: "Crypto investors should be prepared to lose all their money, BOE governor says",
            image: "https://picsum.photos/700",
            date: "2021-07-13",

        },
        {
            id: 3,
            writer: "Damon Salvatore",
            title: "Crypto investors should be prepared to lose all their money, BOE governor says",
            image: "https://picsum.photos/700",
            date: "2021-07-13",

        }, {
            id: 4,
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
                                <NewsCard id={news?.id} writer={news?.writer} title={news?.title} image={news?.image}
                                          date={news?.writer}/>
                            </View>
                        )
                    })
                }

            </ScrollView>
        </>
    );
}