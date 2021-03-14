import React from 'react';
import styles from './main.scss';

const DayComponent = (props) =>{
    return (
        <div className={styles['day']}>
        <span className={styles['title']}>
            {props.day}
        </span>
        </div>
    );
};

export default DayComponent;
