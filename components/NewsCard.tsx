import {Card} from "react-native-paper";
import {Text, View} from "react-native";
import Spacer from "@/components/Spacer";
import {router} from "expo-router";

export default function NewsCard({writer, title, image, date, id}: {
    writer: string;
    title: string;
    image: string;
    date: string;
    id: number
}) {

    const styles = {
        writer: {
            color: "white"
        },
        title: {
            fontSize: 24,
            color: "white"

        },

    }
    return (
        <Card style={{
            height: 200,
            width: "90%",
            position: "relative"
        }} onPress={() => {
            router.push(`/${id}`)
        }}>
            <View style={{
                position: "absolute",
                top: 30,
                left: 10,
                zIndex: 2,
                width: "90%"
            }}

            >

                <Text style={styles.title}>{title}</Text>

                <Spacer size={60}/>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "90%",
                    marginTop: 30

                }}>

                    <Text style={styles.writer}>{writer}</Text>
                    <Text style={{
                        color: "white",
                    }}>{
                        date
                    }</Text>
                </View>

            </View>
            <Card.Cover source={{uri: image}} style={{
                height: 200,
                borderRadius: 10

            }}/>
        </Card>
    )
}