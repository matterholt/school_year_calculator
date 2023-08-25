
import { writable, get } from 'svelte/store';


const Initial = {
    nationalHoliday: [

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
    const lessonFreeDays = writable(Initial)
    const { subscribe, set, update } = lessonFreeDays

    return {
        subscribe,

        addLessonFreeDay: (dayOff, key) => {
            const currentStoreState = get(lessonFreeDays)
            let updateDay = [...currentStoreState?.[key], dayOff]
            update((storeState) => { return { ...storeState, [key]: updateDay } })
        },
        updateNationalHoliday: (updateList) => {
            update((currentState) => {
                return { ...currentState, nationalHoliday: updateList }
            })
        }

    }


}

export let noLessonDays = customStore()
