import React, { useEffect } from "react";
import { View, ActivityIndicator, FlatList, StyleSheet, RefreshControl } from "react-native";
import MovieItem from "../components/movieItem";
import { useAppSelector, useAppDispatch } from "../store";
import { fetchMovie } from "../thunk/movieThunk";

const HomePage = () => {
    const slice = useAppSelector(state => state.home);
    const dispatch = useAppDispatch();

    useEffect(() => {
        handleRefresh()
    }, []);

    const handleRefresh = () => {
        dispatch(fetchMovie(1))
    }

    const handleLoadMore = () => {
        if (slice.page < slice.totalPage) {
            dispatch(fetchMovie(slice.page + 1))
        }
    }

    return (
        <View style={styles.container}>
            {slice.isLoading ? (
                <ActivityIndicator color={"#ff8080"} size={50} style={styles.handlerLoading} />
            ) : (
                <View>
                    <FlatList
                        data={slice.data}
                        renderItem={({ item }) => MovieItem(item)}
                        refreshControl={
                            <RefreshControl
                                refreshing={slice.page == 1 && slice.data.length == 0 ? slice.isLoading : false}
                                onRefresh={handleRefresh}
                            />
                        }
                        onEndReached={handleLoadMore}
                        onEndReachedThreshold={0.05}
                        ListFooterComponent={(slice.data.length != 0 ?
                            <ActivityIndicator color={"#ff8080"} size={50} />
                            :
                            null
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        alignItems: "stretch",
        justifyContent: 'center'
    },
    handlerLoading: {
        marginVertical: 10,
        marginHorizontal: 5,
    }
})

export default HomePage;