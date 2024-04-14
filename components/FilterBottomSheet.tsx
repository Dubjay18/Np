import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {Button} from "react-native-paper";
import {useAppTheme} from "@/app/_layout";
import Spacer from "@/components/Spacer";

const FilterBottomSheet = () => {
    const {colors} = useAppTheme();
    const sortArray = [
        "Recommended",
        "Latest",
        "Most Viewed",
        "Following"
    ]
    const [sort, setSort] = React.useState<string[]>([])

    const handleSort = (item: string) => {
        if (sort.includes(item)) {
            setSort(sort.filter(i => i !== item))
            return
        }
        setSort([...sort, item])
    }
    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    // renders
    return (


        <View style={styles.container}>
            <Button
                onPress={handlePresentModalPress}
                icon={"filter"}
            >Filter</Button>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <BottomSheetView style={styles.contentContainer}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "90%",
                        marginTop: 30,
                        alignItems: "center"
                    }}>
                        <Text style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 24
                        }}>Filter</Text>
                        <Button
                            onPress={() => {
                                console.log("Reset")
                            }}
                            buttonColor={colors?.primary}
                            mode={"outlined"}
                            style={{
                                borderColor: "white",
                                borderWidth: 1,
                                borderRadius: 50,
                                borderStyle: 'solid',

                            }}

                            icon={"delete"}
                            textColor={"white"}
                        >Reset</Button>
                    </View>

                    <View style={{
                        width: "90%",
                    }}>
                        <Spacer size={20}/>
                        <Text style={{
                            color: "white",
                            fontSize: 20

                        }}>Sort By</Text>
                        <Spacer size={20}/>
                        <View style={{
                            flexDirection: "row",
                            width: "100%",
                            flexWrap: "wrap",
                            gap: 10
                        }}>

                            {
                                sortArray.map((item, index) => {
                                    return (
                                        <View key={index}>

                                            <Button
                                                onPress={() => {
                                                    handleSort(item)

                                                }}
                                                mode={"outlined"}
                                                textColor={"white"}
                                                contentStyle={{flexDirection: 'row-reverse'}}
                                                buttonColor={sort.includes(item) ? colors?.primary : "transparent"}
                                                icon={sort.includes(item) ? "cancel" : ""}
                                            >{item}</Button>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                </BottomSheetView>
            </BottomSheetModal>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {},
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default FilterBottomSheet;