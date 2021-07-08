import React, { useState } from 'react'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
   
    const handleInputChange = (e) => {setInputValue(e.target.value);}
   
    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){ 
       setCategories(cats => [ ...cats, inputValue  ]);
       setInputValue('');
        }
    }


return (
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                placeholder={inputValue}
                // value={inputValue}
                onChange={ handleInputChange }
            />   
        </form> 

    )
}

export default AddCategory; 