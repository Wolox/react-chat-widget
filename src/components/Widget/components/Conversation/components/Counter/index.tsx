import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from 'src/store/types';

import './style.scss';

function Counter() {  
    const minlength = useSelector((state: GlobalState) => state.behavior.minLength);
    const maxlength = useSelector((state: GlobalState) => state.behavior.maxLength);
    const counterstyle = useSelector((state: GlobalState) => state.behavior.counterStyle);
    const length = useSelector((state: GlobalState) => state.behavior.msgLength);

    let classname = "rcw-chars";
    let output = length;

    if(length < minlength || length > maxlength)
        classname = "rcw-chars rcw-chars-invalid";

    if(counterstyle === 'min') {
        output = minlength - length > 0 ? minlength - length : 0;
    }

    if(counterstyle === 'max') {
        output = maxlength - length;
    }

    return (    
        <div className={classname}>
            {
                length !== 0 && 
                (
                    (counterstyle === 'counter' && output) || 
                    (counterstyle === 'min' && output > 0 && output) || 
                    (counterstyle === 'max' && output)
                )
            }
        </div>
    );
}

export default Counter;
