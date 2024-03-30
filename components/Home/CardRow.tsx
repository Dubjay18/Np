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
            padding: 10,
            width: DimensionsWindowWidth-40,

        },
        scrollView: {

            width: DimensionsWindowWidth,

        },
    }

    const LatestNews = [
        {
            writer: "by Ryan Browne",
            title: "Crypto investors should be prepared to lose all their money, BOE governor says",
            image: "https://picsum.photos/700",
            description: "The Bank of England governor said that cryptocurrencies are not a safe investment and that people should be prepared to lose all their money if they choose to invest in them."
        },
        {
            writer: "by Ryan Browne",
            title: "Crypto investors should be prepared to lose all their money, BOE governor says",
            image: "https://picsum.photos/700",
            description: "The Bank of England governor said that cryptocurrencies are not a safe investment and that people should be prepared to lose all their money if they choose to invest in them."
        },
        {
            writer: "by Ryan Browne",
            title: "Crypto investors should be prepared to lose all their money, BOE governor says",
            image: "https://picsum.photos/700",
            description: "The Bank of England governor said that cryptocurrencies are not a safe investment and that people should be prepared to lose all their money if they choose to invest in them."
        },
        {
            writer: "by Ryan Browne",
            title: "Crypto investors should be prepared to lose all their money, BOE governor says",
            image: "https://picsum.photos/700",
            description: "The Bank of England governor said that cryptocurrencies are not a safe investment and that people should be prepared to lose all their money if they choose to invest in them."
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
height: 250,
                                    width: "100%",
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
                                        <Spacer size={30}/>
<Text style={{
    color: "white",

}}>"{news?.description}"</Text>
                                    </View>
                                    <Card.Cover source={{ uri: news.image }} style={{
                                        height: 250,
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