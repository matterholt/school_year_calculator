import settings from './settings.json' assert { type: "json" };
const { inputFormat, americanFormat } = settings

import moment from 'moment';


/**
 * 
 * @param {string} date 
 * @param {number} value 
 * 
 * for a given date with an estimated number fo days . 
 * should figure out how many weekend day and add it to the date as well.
 */
function addSomeDays(date, value) {
    // TODO : calculate the weekends for days, 
    return moment(date).add(value, 'days').format(inputFormat);
}

/**
 * Add an X number of days to a piked date
 * @param {string} datePicked 
 * @param {number} addValue 
 * @returns 
 * string with a date
 */
function addemWeeksUp(datePicked, addValue) {

    return moment(datePicked)
        .add(addValue, 'weeks')
        .format(inputFormat)
}

/**
 * Calculates the number of days between 2 dates
 * @param {string} endDate 
 * @param {string} baseEndDate 
 * @returns 
 */
function dayBetweenDates(endDate, baseEndDate) {
    return moment(endDate).diff(baseEndDate, 'days')
}

export { addSomeDays, addemWeeksUp, dayBetweenDates }