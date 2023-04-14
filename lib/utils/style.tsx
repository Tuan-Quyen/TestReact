import { accent, cyan, white } from "./colors"

const headerTitleStyle = () => {
    return {
        color: white,
        fontWeight: "bold",
        fontSize: 18,
    }
}

export const counterStyle: any = {
    headerTitleStyle: headerTitleStyle(),
    headerTintColor: white,
    headerStyle: {
        backgroundColor: accent
    }
}

export const homeStyle: any = {
    headerTitleStyle: headerTitleStyle(),
    headerTintColor: white,
    headerStyle: {
        backgroundColor: cyan
    }
}