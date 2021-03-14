import React, { useState } from 'react';
import { DAYSINWEEK, WEEKSINYEAR } from '../utils/constants';
import styles from './calendar.scss';
import DateComponent from './date';
import MonthComponent from './month';
import generateDateGrid from '../utils/dateutils'

const CalendarComponent = ({goToToday,activeMonth, setActiveMonth}) =>{


    // const [monthInViewPort, setMonthInViewPort] = useState(2);
    // setActiveMonth(activeMonth);

    const dateGrid = generateDateGrid(activeMonth);

    console.log('starting calendarComp');
    var firstDayinMonth = [];
    var weekRowValue = [];
    for(let weekIndex=0;weekIndex<WEEKSINYEAR;weekIndex++){
        let weekRow=[];
        for(let dateIndex=0;dateIndex<DAYSINWEEK;dateIndex++){
            if(dateGrid[weekIndex][dateIndex][0] === 1){
                firstDayinMonth.push(weekIndex);
            }
            weekRow.push(
                <DateComponent
                value = {dateGrid[weekIndex][dateIndex][0]}
                day = {dateIndex}
                month = {firstDayinMonth.length}
                active = {dateGrid[weekIndex][dateIndex][1]}
                />
            );
        }
        weekRowValue.push(<div className={styles['week']}>{weekRow}</div>);
    }

    console.log('nex1..');
    var currentMonth = 1, monthrow = [];

    const monthRow = Array(WEEKSINYEAR)
    .fill(1)
    .map((val, index) => {
        if(index && index===firstDayinMonth[currentMonth]){
            const monthValue = (
            <MonthComponent gotoToday = {goToToday} mid={currentMonth-1} onVisible={setActiveMonth}>
                {monthrow}
            </MonthComponent>
            );
            currentMonth++;
            monthrow = [weekRowValue[index]];
            return monthValue;
        }else{
            monthrow.push(weekRowValue[index]);
        }
    });
    console.log('exiting calendarComp');
    return monthRow;

};

export default CalendarComponent;
