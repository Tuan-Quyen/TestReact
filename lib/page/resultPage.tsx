import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppSelector } from "../store";
import SearchBar from "../components/searchBar";

const ResultPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const slice = useAppSelector(state => state.counter);

    return (
        <View style={styles.container}>
            <Text>{slice.value.toString()}</Text>
            <SearchBar onSearch={(value) => {
                setSearchValue(value)
            }} />
            <Text>{searchValue}</Text>
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
    }
})

export default ResultPage