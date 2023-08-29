import settings from './settings.json' assert { type: "json" };
const { inputFormat } = settings

import moment from 'moment';


function thisCurrentDay() {
    return moment().format(inputFormat)
}

function definedWeekValue(date) {
    return moment(date).week()
}



export { thisCurrentDay, definedWeekValue }