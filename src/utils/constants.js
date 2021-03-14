import { getMonths } from "./dateutils";

export const DATE = new Date();
export const MONTH = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
export const MONTH_short = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export const WEEK = ["Sun", "Mon", "Tue","Wec", "Thu", "Fri", "Sat"];

export const WEEKSINYEAR = 54;
export const MONTHSINYEAR = 12;
export const DAYSINWEEK = 7;

export const DAYSINMONTH = getMonths(DATE.getFullYear());
