import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { homeStyle } from "./style";
import CounterPage from "../page/counterPage";
import HomePage from "../page/homePage";
import MapPage from "../page/mapPage";
import { HomeTabParamList, HOME_ROUTE, COUNTER_ROUTE, MAP_ROUTE } from "../type/routeType";

export const HomeStack = () => {
    const Tab = createBottomTabNavigator<HomeTabParamList>();
    return <Tab.Navigator initialRouteName={HOME_ROUTE} screenOptions={homeStyle}>
        <Tab.Screen name={HOME_ROUTE} component={HomePage} />
        <Tab.Screen name={COUNTER_ROUTE} component={CounterPage} />
        <Tab.Screen name={MAP_ROUTE} component={MapPage} />
    </Tab.Navigator>
}