
import { writable } from 'svelte/store';


const Initial = {
    nationalHoliday: [
        { text: 'swim in the ocean', StartDate: '01-01-01' },

        // all holidays with isObserved status
    ],
    scheduledDaysOff:
        [
            { text: 'swim in the ocean', StartDate: '01-01-01' },
            {
                text: 'Family Skiing Trip to the Alps ',
                StartDate: '01-01-01',
                EndDate: '01-13-01',
            },
        ],
    unPlannedDaysOff: [
        // {typeOf: "sick", numOfDays: 1},

    ]
}
function customStore() {
    const { subscribe, set, update } = writable(Initial)

    return {
        subscribe,
        addPlannedDayOff: () => update((v) => {
            console.log(v)
        })

    }


}

export let noLessonDays = customStore()
// noLessonDays.subscribe((value) => {
//     console.log(value);
// });


// export function totalDaysOff() {

//     const { nationalHoliday, scheduledDaysOff, unPlannedDaysOff } = store;
//     const activeNationHolidays = nationalHoliday.filter(x => x.isObserved)
//     const nationalHolidayDayCount = activeNationHolidays.reduce((acc, nationalDay) => nationalDay.dayValue + acc, 0)

//     return nationalHolidayDayCount + scheduledDaysOff.length + unPlannedDaysOff.length
// })


// console.log("log it out", unSub)
// }