
import { useCallback, useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    TextInput,
} from "react-native";
import ApiInstance from "../../config/APIs/ApiInstance";
import Toast from "react-native-toast-message";

export default function UpdateForUser() {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    const getData = useCallback(async () => {
        try {
            setLoading(true);
            const res = await ApiInstance.get("/userRoute/update");
            console.log(res.data);
            setPostData(res.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            Toast.show({
                type: "error",
                text1: "Server error",
                text2: error.message,
            });
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getData();
    }, []);

    const filteredData = search
        ? postData.filter(item =>
              item.title.toLowerCase().includes(search.toLowerCase())
          )
        : postData;

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.heading}>Updates By Admin</Text>

                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by title"
                    value={search}
                    onChangeText={setSearch}
                    placeholderTextColor="#888"
                />

                {loading ? (
                    <ActivityIndicator size={24} color={"#7b241c"} />
                ) : filteredData.length === 0 ? (
                    <Text style={styles.noData}>No Data Available</Text>
                ) : (
                    <FlatList
                        data={filteredData}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            const isHighlighted = search &&
                                item.title.toLowerCase().includes(search.toLowerCase());

                            return (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={[
                                        styles.card,
                                        isHighlighted && styles.highlightCard,
                                    ]}
                                >
                                    <Text style={styles.label}>Title:</Text>
                                    <Text style={styles.value}>{item.title}</Text>

                                    <Text style={styles.label}>Date:</Text>
                                    <Text style={styles.value}>{item.date}</Text>

                                    <Text style={styles.label}>Category:</Text>
                                    <Text style={styles.value}>{item.category}</Text>

                                    <Text style={styles.label}>Description:</Text>
                                    <Text style={styles.value}>{item.description}</Text>

                                    <Text style={styles.label}>Priority:</Text>
                                    <Text style={styles.value}>{item.priority}</Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                )}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 15,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#7b241c",
        marginBottom: 20,
        textAlign: "center",
    },
    searchInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        color: "#000",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        marginBottom: 15,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderLeftWidth: 6,
        borderLeftColor: "#7b241c",
    },
    highlightCard: {
        backgroundColor: "#ffe6e1",
        borderLeftColor: "#e74c3c",
    },
    label: {
        fontWeight: "bold",
        color: "#7b241c",
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        color: "#333",
        marginBottom: 6,
    },
    noData: {
        textAlign: "center",
        marginTop: 30,
        fontSize: 18,
        color: "#999",
    },
});
