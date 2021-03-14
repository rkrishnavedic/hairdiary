import { DATE, DAYSINMONTH, DAYSINWEEK, MONTHSINYEAR, WEEKSINYEAR } from "./constants";

function checkLeap(year){
    if(year%100===0){

       return year%400===0;

    }else{
return year%4===0;
    }
}

export function getMonths(year){
    if(checkLeap(year)){
        return [31,29,31,30,31,30,31,31,30,31,30,31];
    }
    return [31,28,31,30,31,30,31,31,30,31,30,31];
}

function calcFirstDayOfYear(y, M=0, k=1){
    const m = ((M+10)%12)+1;
    const D = (y%100)-(m>10?1:0);
    const C = Math.floor(y/100);
    const F = k+Math.floor((13*m-1)/5)+D+Math.floor(D/4)+Math.floor(C/4)-2*C;
    const T = F>0? F: (F-(Math.floor(F)+2)*7)%7;
    console.log('lemma\n');
    return T%7;
}

function generateDateGrid(activeMonth){
    const dateGrid = Array.from({ length: WEEKSINYEAR}, (_) => Array.from({length:DAYSINWEEK},(_)=>[1,false]));

    const startDayOfTheYear = calcFirstDayOfYear(DATE.getFullYear());

    console.log('Inside generateGrid');
    //populating week on grid
    for(let i=0;i<startDayOfTheYear;i++){
        dateGrid[0][i][0] = DAYSINMONTH[11]-(startDayOfTheYear-1)+i;
    }

    let weekvalue = 0;
    let k= startDayOfTheYear;
    console.log('next1..');
    for(let i=0;i<MONTHSINYEAR;i++){
        for(let j=0;j<DAYSINMONTH[i];j++){
            dateGrid[weekvalue][k][0] = j+1;
            dateGrid[weekvalue][k][1] = (i===activeMonth);
            // console.log(dateGrid[weekvalue][k]);
            k++;
            // console.log(k);
            if(k===DAYSINWEEK){
                k=0;
                weekvalue++;
            }
        }
    }
    console.log('next2..');
    for(let i=k;i<DAYSINWEEK;i++){
        dateGrid[weekvalue][i][0] = i-k+1;
    }
    console.log('exiting generate Grid\n');
    return dateGrid;
}

export default generateDateGrid;