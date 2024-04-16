import React, {useCallback, useRef, useMemo, useEffect} from "react";
import {StyleSheet, View, Text, Button} from "react-native";
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import {Card} from "react-native-paper";

const NewSheet = () => {
    // hooks
    const sheetRef = useRef<BottomSheet>(null);

    // variables
    const snapPoints = useMemo(() => ["25%", "50%", "90%", "100%"], []);

    // callbacks
    const handleSheetChange = useCallback((index: any) => {
        console.log("handleSheetChange", index);
    }, []);
    const handleSnapPress = useCallback((index: any) => {
        sheetRef.current?.snapToIndex(index);
    }, []);
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
    }, []);

    // render
    return (
        <View style={styles.container}>
            <Button title="Snap To 90%" onPress={() => handleSnapPress(2)}/>
            <Button title="Snap To 50%" onPress={() => handleSnapPress(1)}/>
            <Button title="Snap To 25%" onPress={() => handleSnapPress(0)}/>
            <Button title="Close" onPress={() => handleClosePress()}/>
            <BottomSheet
                ref={sheetRef}
                containerHeight={900}
                snapPoints={snapPoints}
                onChange={handleSheetChange}
            >
                <BottomSheetView style={{
                    position: "relative"
                }}>
                    <Card style={{
                        backgroundColor: "black",
                        width: "60%",
                        marginHorizontal: "auto",
                        position: "absolute",
                        top: -20
                    }}>
                        <Text>jdaankjfndjnf</Text>
                    </Card>
                    <Text>Awesome 🔥</Text>
                </BottomSheetView>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

export default NewSheet;