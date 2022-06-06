import React from 'react';
import styles from './index.scss'

const HelloWorld = () =>( 
    <div className={`${styles.nightMode} ${styles.title}`} >Hello</div>

);
// console.log("STYLE",styles)

export default HelloWorld;