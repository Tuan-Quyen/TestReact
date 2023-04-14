import React from "react"
import { Button, StyleSheet, View } from "react-native"
import { HOME_ROOT, RootStackParamList } from "../type/routeType"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const LoginPage = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.container}>
            <Button
                title="Login"
                onPress={() => {
                    navigation.navigate(HOME_ROOT)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoginPage