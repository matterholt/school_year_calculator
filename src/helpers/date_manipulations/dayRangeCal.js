import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);


let en = moment().locale('en');
let localeData = en.localeData()


function dayRangeCal(dateStart, dateEnd, DayOfweekOff = ['Sunday', 'Saturday']) {
    if (!dateEnd) {
        return 1
    }
    let endDate = moment(dateEnd, 'YYYY-MM-DD')
    let startDate = moment(dateStart, 'YYYY-MM-DD')
    // 
    const range = moment.range(startDate, endDate);
    const days = Array.from(range.by('day'));
    const dayRemove = days.filter(m => !DayOfweekOff.includes(localeData.weekdays(m)) === true)
    return dayRemove.length


}


export default dayRangeCal