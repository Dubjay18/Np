import {Button, StyleSheet} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import {Text, View} from '@/components/Themed';
import React, {useCallback, useMemo, useRef} from "react";
import {FAB, Searchbar} from "react-native-paper";
import {SafeAreaProvider, useSafeAreaInsets} from "react-native-safe-area-context";
import {useAppTheme} from "@/app/_layout";
import Spacer from "@/components/Spacer";
import {Link, useRouter} from "expo-router";
import CardRow from "@/components/Home/CardRow";
import CategoryList from "@/components/Home/CategoryList";
import CategoryCol from "@/components/Home/CategoryCol";


export default function TabOneScreen() {
    const router = useRouter()

    const [searchQuery, setSearchQuery] = React.useState('');
    const insets = useSafeAreaInsets();
    const [currentCategory, setCurrentCategory] = React.useState("Business");
    const {
        colors: {background, text, primary},
    } = useAppTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',

        },
        sheet_container: {

            padding: 24,
            justifyContent: 'center',
            backgroundColor: 'grey',
        },
        contentContainer: {
            flex: 1,
            alignItems: 'center',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
        },
        separator: {
            marginVertical: 30,
            height: 1,
            width: '80%',
        },
        fab: {
            backgroundColor: primary,
            borderRadius: 1000,
        },

    });
    return (
        <SafeAreaProvider>


            <View style={{
                ...styles.container,
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}>
                <View style={{
                    flexDirection: "row",
                    gap: 10,
                }}>

                    <Searchbar
                        placeholder="Search"
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                        placeholderTextColor={text}
                        iconColor={text}

                        onEndEditing={() => {
                            console.log("search", searchQuery);
                            router.push(`/search?query=${searchQuery}` as any)
                        }
                        }

                        inputStyle={{color: "#FFF"}}


                        style={{
                            backgroundColor: background,
                            opacity: 0.6,
                            color: "#FFF",
                            borderStyle: 'solid',
                            borderColor: primary,
                            borderWidth: 0.5,
                            flex: 0.9
                        }}
                    />
                    <View>
                        <FAB
                            icon="bell"
                            style={styles.fab}
                            onPress={() => console.log('Pressed')}
                        />
                    </View>
                </View>
                <Spacer size={20}/>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "90%"
                }}>

                    <Text style={styles.title}>Latest News</Text>
                    <Link href={"/"}>
                        <Text style={{
                            color: primary,
                            fontWeight: "bold",
                            fontSize: 16,
                            marginLeft: "auto",
                            marginRight: 10
                        }}>See All</Text>
                    </Link>
                </View>
                <View
                    style={{
                        width: "90%",
                        flex: 0.4
                    }}>
                    <CardRow/>
                </View>
                <View style={{
                    width: "90%",
                    flex: 0.1
                }}>

                    <CategoryList
                        currentCategory={currentCategory}
                        onCategoryChange={setCurrentCategory}
                    />
                </View>
                <View style={{
                    width: "90%",
                    flex: 0.5
                }}>

                    <CategoryCol/></View>
                <Spacer size={20}/>
            </View>


        </SafeAreaProvider>
    );
}


