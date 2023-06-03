import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"
import { io } from "socket.io-client";

import { HelloWorld } from "src/components"

const HOSTNAME = "Gershoms-MBP"; // Temporary during development
const PORT = 8080;
const URL = `http://${HOSTNAME}:${PORT}`;

const socket = io(URL);

const Main = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [apiData, setApiData] = useState<any>({ "state": "loading" });

    useEffect(() => {
        fetchData()
            .then(() => setIsMounted(true));
    }, []);

    const fetchData = async () => {


        try {
            const response = await fetch(URL);
            const data = await response.json();

            setApiData(data);
        }
        catch (error) {
            console.error(error);
            setApiData(String(error));
        }
    }

    return (
        <SafeAreaProvider>
            <View className="flex-1 justify-center items-center">
                <View className="flex flex-row">
                    <Text>{"Is Mounted: "}</Text>
                    <Text>{isMounted ? "True" : "False"}</Text>
                </View>
                <Text>{JSON.stringify(apiData)}</Text>
            </View>
        </SafeAreaProvider >
    );
}

export { Main }