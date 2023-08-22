
import { writable } from 'svelte/store';


const Initial = {
    nationalHoliday: [
        // all holidays with isObserved status
    ],
    scheduledDaysOff:
        [
            { text: 'Family Skiing Trip to the Alps ', StartDate: '01-01-01' },
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
export const noLessonDays = writable(Initial)


noLessonDays.subscribe((value) => {
    console.log(value);
});