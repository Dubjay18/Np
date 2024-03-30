import {Text, View} from "react-native";
import {Card} from "react-native-paper";
import {useAppTheme} from "@/app/_layout";
import Spacer from "@/components/Spacer";

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
            fontWeight: "bold",
            color: "white"
        }
    }
    return (
        <View style={{
            flexDirection: 'row',

            justifyContent: 'space-between',
            width: "90%"
        }}>
            <Card style={{
                width: "100%",
                position: "relative"
            }}>
                <View style={{
                    position: "absolute",
                    top: 30,
                    left: 10,
                    zIndex: 2,

                }}>

                <Text style={styles.writer}>by Ryan Browne</Text>
                    <Spacer size={20}/>
                    <Text style={styles.title}>Crypto investors should be prepared to lose all their money, BOE governor says</Text>

                </View>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            </Card>
        </View>
    );
}