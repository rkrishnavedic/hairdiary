import React, { useEffect, useRef } from 'react';
import { DATE, MONTH } from '../utils/constants';
import styles from './calendar.scss';

var obs;

const MonthComponent = (props) =>{

    const monthref = useRef();
    useEffect(() =>{
        obs = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.intersectionRatio >= 0.8){
                    props.onVisible(props.mid)
                }
                // console.log(entry);
            })
        },{
            root:null,
            rootMargin:'0px',
            threshold:1,
        });
       obs.observe(monthref.current);
    })

    useEffect(() =>{
        const monthrefvalue = monthref && monthref.current;
        if(monthrefvalue){
            if(props.mid === DATE.getMonth()){
                monthrefvalue.scrollIntoView();
                
            }
        }
    },[]);

    return (
        <div className={styles['months']} id={MONTH[props.mid]} ref={monthref}>
            {props.children}
        </div>
    );
};

export default MonthComponent;
