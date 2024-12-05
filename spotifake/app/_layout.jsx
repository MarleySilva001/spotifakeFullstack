import React from "react";
import { IdProvider } from "../scripts/idContext";
import { SongProvider } from "../scripts/SongContext";
import { Slot } from "expo-router";

export default Layout = () => {
    return (
        <IdProvider>
            <SongProvider>
                <Slot />
            </SongProvider>
        </IdProvider>
    )
}