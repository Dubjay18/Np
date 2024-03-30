import {ScrollView, Text, View} from "react-native";
import {Button} from "react-native-paper";
import {useAppTheme} from "@/app/_layout";

export default function CategoryList({
    currentCategory= "Business",
    onCategoryChange
                                     }:{
    currentCategory: string;
    onCategoryChange: (category: string) => void;
}) {
    const theme = useAppTheme();
    const categoryArray = [
        "Business",
        "Entertainment",
        "Health",
        "Science",
        "Sports",
        "Technology"
    ]
    return (
        <ScrollView horizontal={true}>
            {
                categoryArray.map((category, index) => {
                    return (
                        <View key={index} style={{
                            padding: 10,
                        }}>

                        <Button onPress={
                            () => onCategoryChange(category)
                        }  buttonColor={category == currentCategory ? theme?.colors.primary : "transparent"} textColor={category == currentCategory ? theme.colors.text : "white"}>{category}</Button>
                        </View>
                    )
                })
            }

        </ScrollView>
    );
}