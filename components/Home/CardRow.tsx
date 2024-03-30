import {Animated, Dimensions, ScrollView, Text, View} from "react-native";
import {Card} from "react-native-paper";
import {useAppTheme} from "@/app/_layout";
import Spacer from "@/components/Spacer";

const DimensionsWindowWidth = Dimensions.get("window").width;
export default function CardRow () {
    const {
        colors: { background,text,primary},
    } = useAppTheme();
    const styles = {
     writer:{
         color: "white"
     },
        title:{
            fontSize: 24,
            color: "white"

        },
        slide: {
            padding: 30,
            width: DimensionsWindowWidth-70,

        },
        scrollView: {

            width: DimensionsWindowWidth,
flex: 0.4
        },
    }

    const LatestNews = [
        {
            writer: "by Ryan Browne",
            title: "Crypto investors should be prepared to lose all their money, BOE governor says",
            image: "https://picsum.photos/700"
        },
        {
            writer: "by Ryan Browne",
            title: "Crypto investors should be prepared to lose all their money, BOE governor says",
            image: "https://picsum.photos/700"
        },
        {
            writer: "by Ryan Browne",
            title: "Crypto investors should be prepared to lose all their money, BOE governor says",
            image: "https://picsum.photos/700"
        },
        {
            writer: "by Ryan Browne",
            title: "Crypto investors should be prepared to lose all their money, BOE governor says",
            image: "https://picsum.photos/700"
        },
    ]
    return (
        <>
            <ScrollView horizontal={true} style={styles.scrollView}>
                {
                    LatestNews.map((news, index) => {
                        return (
                            <View style={styles.slide} key={index}>
                                <Card style={{

                                    position: "relative"
                                }}>
                                    <View style={{
                                        position: "absolute",
                                        top: 30,
                                        left: 10,
                                        zIndex: 2,

                                    }}>

                                        <Text style={styles.writer}>{news.writer}</Text>
                                        <Spacer size={20}/>
                                        <Text style={styles.title}>{news.title}</Text>

                                    </View>
                                    <Card.Cover source={{ uri: news.image }} />
                                </Card>

                            </View>
                        )
                    })
                }



            </ScrollView>

        </>
    );
}