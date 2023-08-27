
import { writable, get } from 'svelte/store';
import { updateStoreDaysOff } from "../local_storage/saveIndexedDb"


// TODO :  check if there is a data in the data base
const Initial = {
    scheduledDaysOff: [],
    unPlannedDaysOff: []
}

// get if in db


function customStore() {
    const lessonFreeDays = writable(Initial)
    const { subscribe, set, update } = lessonFreeDays
    return {
        subscribe,
        addLessonFreeDay: (dayOff, key) => {
            const currentStoreState = get(lessonFreeDays)
            let updateDay = [...currentStoreState?.[key], dayOff]


            updateStoreDaysOff('scheduled_days_off', dayOff)

            update((storeState) => { return { ...storeState, [key]: updateDay } })
        },
        updateLessonFreeDay: () => {
            console.log("update data")
        },
        RemoveLessonFreeDay: () => {
            console.log("Remove data")
        }

    }


}



export let noLessonDays = customStore()
