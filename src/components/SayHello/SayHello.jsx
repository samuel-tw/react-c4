import React from 'react';
import styles from './index.scss'

const SayHello = (props) => ( 
    <div>
        {`Hello ${props.name === null ? 'nobody' : props.name}`}
    </div>

);

 

export default SayHello;