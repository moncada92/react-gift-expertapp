import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategories = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const hanlderInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const hanldeSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            setCategories(category => [inputValue, ...category]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={hanldeSubmit}>
            <input
                onChange={hanlderInputChange}
                value = {inputValue}
                type="text" />
        </form>
    );
};

AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategories;