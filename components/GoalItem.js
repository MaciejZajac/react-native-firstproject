import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GoalItem = ({ item, onDelete }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(item.id)}>
            <View style={styles.listItem}>
                <Text>{item.value}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    },
});

export default GoalItem;
