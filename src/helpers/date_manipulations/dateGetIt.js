import settings from './settings.json' assert { type: "json" };
const { inputFormat } = settings

import moment from 'moment';


function formatDate(date) {
    return moment(date || null).format(inputFormat)
}

function definedWeekValue(date) {
    return moment(date).week()
}



export { formatDate, definedWeekValue }