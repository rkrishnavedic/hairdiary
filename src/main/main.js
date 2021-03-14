import React, { useState } from 'react';
import CalendarComponent from '../calendar/calendar';
import DateComponent from '../calendar/date';
import { DATE, MONTH, WEEK } from '../utils/constants';
import DayComponent from './day';
import DataFetching from './fetchdata';

import styles from './main.scss';

function Main() {
	//console.log(DATE.getMonth());
	const [activeMonth, setActiveMonth] = useState(DATE.getMonth());

	DataFetching();

	var goToToday=false;

	return (
		<>
		{/* <div style="position:absolute" className={styles['wrapper']}> */}
			<nav className={styles['nav']}>
				<h1 className={styles['h1']}>
					{MONTH[activeMonth]} <span className={styles['span']}>{DATE.getFullYear()}</span>
					
				</h1>
				<div className={styles['row']}>
					{WEEK.map((week, index)=><DayComponent day={week} />)}
				</div>
			</nav>
			{/* </div> */}
			<div className={styles['wrapper']}>
				<CalendarComponent goToToday={goToToday} activeMonth={activeMonth} setActiveMonth={setActiveMonth} />
			</div>
		</>
	);
}

export default Main;
