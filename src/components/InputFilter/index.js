import React from 'react';
import './styles.scss';

const InputFilter = props =>{
    return(
        <form className="InputFilter">
            <label className="InputFilter__label">
                <select className="InputFilter__input" type="text">
                    <option className="InputFilter__option">Name</option>
                </select>
            </label>
        </form>
    )
}

export default InputFilter;