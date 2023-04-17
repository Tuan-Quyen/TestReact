import React from "react"
import { StyleSheet, View } from "react-native"
import Mapbox from "@rnmapbox/maps";
import { MAP_ACCESS_KEY } from "../baseApi";

Mapbox.setAccessToken(MAP_ACCESS_KEY)

const MapPage = () => {

    return (
        <View style={styles.container}>
            <Mapbox.MapView
                style={styles.map}>
            </Mapbox.MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        alignItems: "stretch",
        justifyContent: 'center'
    },
    map: {
        flex: 1
    }
})

export default MapPage