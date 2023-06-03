import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"

import { socket } from "./socket";

const Main = () => {
    const [socketID, setSocketID] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const [serverResponse, setServerResponse] = useState("");

    useEffect(() => {
        const onConnect = () => {
            setSocketID(socket.id);
            setIsConnected(true);
        }

        const onDisconnect = () => {
            setSocketID("");
            setIsConnected(false);
            setServerResponse("");
        }

        const onServerResponse = (value: any) => setServerResponse(value);

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);
        socket.on("serverResponse", onServerResponse);

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
            socket.off("serverResponse", onServerResponse);
        }
    }, []);

    const onClickHandler = () => {
        socket.emit("clickMeEvent");
    }

    return (
        <SafeAreaProvider>
            <View className="flex-1 justify-center items-center">
                <View className="flex flex-row">
                    <Text>{"Socket ID: "}</Text>
                    <Text>{socketID}</Text>
                </View>
                <View className="flex flex-row">
                    <Text>{"Is Connected: "}</Text>
                    <Text>{isConnected ? "True" : "False"}</Text>
                </View>
                <View className="flex flex-row">
                    <Text>{"Server Response: "}</Text>
                    <Text>{serverResponse}</Text>
                </View>
                <View>
                    <Button title="Click Me" onPress={onClickHandler} />
                </View>
            </View>
        </SafeAreaProvider >
    );
}

export { Main }