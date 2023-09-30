import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);


let en = moment().locale('en');
let localeData = en.localeData()

/**
 * 
 * @param {string} dateStart 
 * @param {string} dateEnd 
 * @param {string[]} DayOfWeekOff 
 * @returns 
 * the number of school days, excluding weekends
 */
function dayRangeCal(dateStart, dateEnd, DayOfWeekOff = ['Sunday', 'Saturday']) {
    if (!dateEnd) {
        return 1
    }
    let endDate = moment(dateEnd, 'YYYY-MM-DD')
    let startDate = moment(dateStart, 'YYYY-MM-DD')
    // 
    const range = moment.range(startDate, endDate);
    const days = Array.from(range.by('day'));
    const dayRemove = days.filter(m => !DayOfWeekOff.includes(localeData.weekdays(m)) === true)
    return dayRemove.length


}


export default dayRangeCal