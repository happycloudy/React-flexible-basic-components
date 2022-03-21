import React from 'react';
import Autocomplete from "../../components/Autocomplete/Autocomplete";

const ExampleAutocomplete = () => {

    const handleFetch = async (value) => {
        return new Promise(resolve => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => resolve(json.map(item => item.name)))
        })
    }

    return (
        <div style={{width: '50%'}}>
            <Autocomplete fetchFunction={handleFetch}/>
        </div>
    );
};

export default ExampleAutocomplete;