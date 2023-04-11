import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MovieItem = (item: any) => {
    return (
        <TouchableOpacity
            onPress={() => { console.log(item) }}>
            <View style={styles.movieItem}>
                <View style={[
                    {
                        flexDirection: 'column',
                        flex: 1
                    }
                ]} >
                    <Text>ID: {item['id']}</Text>
                    <Text>Title: {item['title']}</Text>
                    <Text>Overview: {item['overview']}</Text>
                </View>
                <View style={[{ flexDirection: 'column' }]}>
                    <Text>Vote: {item['vote_average']}</Text>
                    <Text>Vote: {item['vote_count']}</Text>
                    <Text>Online: {item['adult'] ? 'Yes' : 'No'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    movieItem: {
        marginBottom: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
        flexDirection: "row"
    }
})

export default MovieItem;