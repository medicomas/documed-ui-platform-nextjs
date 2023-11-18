import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
    onClear: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onClear }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            onSearch(searchTerm);
        }
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        onClear(); // Call the onClear prop here
    };


    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
                placeholder='Buscar paciente'
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
                fullWidth
            />
            {searchTerm && (
                <IconButton onClick={handleClearSearch}>
                    <ClearIcon />
                </IconButton>
            )}
        </div>
    );
};
