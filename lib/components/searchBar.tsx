import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

interface SearchBarProps {
    onSearch: (searchText: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search"
                onChangeText={text => {
                    setSearchText(text)
                    onSearch(text)
                }}
                value={searchText}
            />
            <TouchableOpacity onPress={() => onSearch(searchText)} style={styles.button}>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 16,
    },
    input: {
        flex: 1,
        padding: 8,
    },
    button: {
        padding: 8,
    },
});

export default SearchBar;