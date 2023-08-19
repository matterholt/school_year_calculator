
import { writable } from 'svelte/store';


const Initial = {
    nationalHoliday: [
        // all holidays with isObserved status
    ],
    scheduledDaysOff:
        [
            // {typeOf: "vacation", numOfDays: 5},
        ],
    unPlannedDaysOff: [
        // {typeOf: "sick", numOfDays: 1},

    ]
}
export const noLessonDays = writable(Initial)


noLessonDays.subscribe((value) => {
    console.log(value);
});