import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from 'src/store/types';

import './style.scss';

type Props = {
    length: number;
    minLength: number;
    maxLength: number;
    counterStyle: 'counter' | 'countdown'
}

function Counter({ length, minLength, maxLength, counterStyle }: Props) {  

    let classname = "rcw-chars";
    let output = length;

    if(length < minLength || length > maxLength)
        classname = "rcw-chars rcw-chars-invalid"

    if(counterStyle === 'countdown') {
        output = minLength - length > 0 ? minLength - length : 0
    }

    return (    
        <div className={classname}>{(counterStyle === 'counter' && output) || (counterStyle === 'countdown' && output > 0 && output)}</div>
    );
}

export default Counter;
