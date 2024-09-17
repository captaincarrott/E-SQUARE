'use client'
import { PersistGate } from "redux-persist/integration/react";
import { makeStore, persistor } from "./store";
import { Provider } from "react-redux";

// Create the store outside of the component to ensure it's only created once
const store = makeStore();

export const StoreProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};
