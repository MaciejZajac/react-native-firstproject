import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = (goal) => {
        setCourseGoals((currentGoals) => [...currentGoals, { id: Math.random().toString(), value: goal }]);
    };

    const removeGoalHandler = (id) => {
        setCourseGoals((currentGoals) => {
            return currentGoals.filter((item) => item.id !== id);
        });
    };

    return (
        <View style={styles.screen}>
            <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
            <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} />
            <FlatList
                keyExtractor={(item) => item.id}
                data={courseGoals}
                renderItem={(itemData) => {
                    return <GoalItem onDelete={removeGoalHandler} item={itemData.item} />;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    },
});
