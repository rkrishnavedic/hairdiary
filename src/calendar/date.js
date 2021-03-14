import React from 'react';
import { DATE, MONTH, MONTH_short } from '../utils/constants';
import styles from './calendar.scss';

const DateComponent = ({value, day, month, active}) =>{
    let dateStyle = false;
    if(value === DATE.getDate() && month>0){
        if(
            (value===1 && month-1 === DATE.getMonth()) ||
            (value!==1 && month-1 === DATE.getMonth())
        ){
            dateStyle=true;
        }
    }
    console.log("active-month = "+active.toString()+" "+month.toString())
    return (
        <div className={styles['date']+' '+(!day? styles['sunday']:'')+' '+(active? styles['active-month']:'')}>
            <div className={styles['date-box']}>
                <span className={styles['text']+' '+(dateStyle? styles['active']:'')}>
                    {value}
                </span>
                {value === 1? (
                    <div className={styles['month']+' '+(DATE.getMonth()===month-1? styles['month-active']:'')}>
                        {MONTH_short[month-1]}
                        </div>
                        ):
                        null
                }
            </div>
        </div>
    )
};

export default DateComponent;