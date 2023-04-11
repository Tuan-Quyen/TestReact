import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useAppDispatch, useAppSelector } from "../store";
import { decrease, increase, inputValue } from "../actions/counterAction";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RESULT_ROUTE, RootStackParamList } from "../type/routeType";

const CounterPage = () => {
    const slice = useAppSelector(state => state.counter);
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Text>{slice.value.toString()}</Text>
            <View style={styles.horizontal}>
                <TextInput
                    style={styles.inputStyle}
                    defaultValue={slice.inputValue.toString()}
                    keyboardType="number-pad"
                    onSubmitEditing={(event) => { dispatch(inputValue(Number(event.nativeEvent.text))) }}
                />
            </View>
            <View style={[styles.horizontalSpaceRound, { width: 200 }]}>
                <Button
                    title="+"
                    onPress={() => {
                        dispatch(increase())
                    }} />
                <Button
                    title="-"
                    onPress={() => {
                        dispatch(decrease())
                    }} />
            </View>
            <Button
                title="View Result"
                onPress={() => {
                    navigation.navigate(RESULT_ROUTE)
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center', alignItems: 'center'
    },
    horizontal: {
        flexDirection: 'row'
    },
    horizontalSpaceRound: {
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    inputStyle: {
        borderColor: 'blue',
        borderWidth: 1,
        marginHorizontal: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flex: 1
    }
})

export default CounterPage