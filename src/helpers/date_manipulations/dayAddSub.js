import settings from './settings.json' assert { type: "json" };
const { inputFormat } = settings

import moment from 'moment';


/**
 * 
 * @param {string} date 
 * @param {number} value 
 */
function addSomeDays(date, value) {
    return moment(date).add(value, 'days').format(inputFormat);
}


function thisCurrentDay() {
    return moment().format(inputFormat)
}



export { addSomeDays, thisCurrentDay }