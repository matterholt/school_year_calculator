import settings from './settings.json' assert { type: "json" };
const { inputFormat, americanFormat } = settings

import moment from 'moment';


/**
 * 
 * @param {string} date 
 * @param {number} value 
 */
function addSomeDays(date, value) {
    return moment(date).add(value, 'days').format(inputFormat);
}

/**
 * Add an X number of days to a piked date
 * @param {string} datePicked 
 * @param {number} addValue 
 * @returns 
 */
function addemWeeksUp(datePicked, addValue) {
    return moment(datePicked)
        .add(addValue, 'weeks')
        .format(americanFormat)

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