import settings from './settings.json' assert { type: "json" };
const { inputFormat } = settings

import moment from 'moment';


function formatDate(date) {
    if (date) {
        return moment(date).format(inputFormat)
    }

    return moment(date).format(inputFormat)

}

function definedWeekValue(date) {
    return moment(date).week()
}



export { formatDate, definedWeekValue }