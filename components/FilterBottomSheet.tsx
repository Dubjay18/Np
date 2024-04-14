import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {Button} from "react-native-paper";

const FilterBottomSheet = () => {
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
                        <Text>Awesome 🎉</Text>
                    </BottomSheetView>
                </BottomSheetModal>
            </View>

    );
};

const styles = StyleSheet.create({
    container: {
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default FilterBottomSheet;