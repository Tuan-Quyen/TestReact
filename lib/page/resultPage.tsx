import { View, Text, Button, StyleSheet } from "react-native";
import { useAppSelector } from "../store";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SearchBar from "../components/searchBar";
import { HOME_ROUTE, RootStackParamList } from "../type/routeType";
import { useState } from "react";

const ResultPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const slice = useAppSelector(state => state.counter);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Text>{slice.value.toString()}</Text>
            <Button
                title="View Home Page"
                onPress={() => {
                    navigation.navigate(HOME_ROUTE)
                }}
            />
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