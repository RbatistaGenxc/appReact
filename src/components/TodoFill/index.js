import React from 'react';
import './TodoFill.css';

function TodoFill({
    searchValue,
    setSearchValue
    }){
   
        return(
            <div className='container'
            >
                <input  
                    placeholder="remember make the food"
                    value={searchValue}
                    className="TodoFill"

                    onChange={
                        (event) => {
                            setSearchValue(event.target.value);
                        }
                    }
                ></input>
            </div>
    
        );
    
    }
    
    export{TodoFill}