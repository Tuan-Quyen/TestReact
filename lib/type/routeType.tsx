export const HOME_ROUTE = "Home";
export const COUNTER_ROUTE = "Counter";
export const HOME_ROOT = "HOME_ROOT";
export const RESULT_ROUTE = "Result";
export const LOGIN_ROUTE = "Login";
export const MAP_ROUTE = "Map";

export type RootStackParamList = {
    [LOGIN_ROUTE]: undefined;
    [HOME_ROOT]: undefined;
    [RESULT_ROUTE]: undefined;
};

export type HomeTabParamList = {
    [HOME_ROUTE]: undefined;
    [COUNTER_ROUTE]: undefined;
    [MAP_ROUTE]: undefined;
};