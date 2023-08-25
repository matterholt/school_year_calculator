
import { writable, get } from 'svelte/store';
import { updateStore } from "../local_storage/saveIndexedDb"


const Initial = {
    scheduledDaysOff: [],
    unPlannedDaysOff: []
}


function customStore() {
    const lessonFreeDays = writable(Initial)
    const { subscribe, set, update } = lessonFreeDays


    return {
        subscribe,
        addLessonFreeDay: (dayOff, key) => {
            const currentStoreState = get(lessonFreeDays)
            let updateDay = [...currentStoreState?.[key], dayOff]
            updateStore('scheduled_days_off', dayOff)
            update((storeState) => { return { ...storeState, [key]: updateDay } })
        },

    }


}



export let noLessonDays = customStore()
