
import { writable, get } from 'svelte/store';
import { updateStoreDaysOff, getNoLessonsDays, removeDateFromNoLessons } from "../local_storage/saveIndexedDb"


// TODO :  check if there is a data in the data base
const Initial = {
    scheduledDaysOff: [],
    unPlannedDaysOff: []
}

// get if in db


function customStore() {
    const lessonFreeDays = writable(Initial)
    const { subscribe, set, update } = lessonFreeDays


    getNoLessonsDays().then(
        (data) => lessonFreeDays.set(data)
    ).catch((error) => {
        console.error(error);
    });

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
        removeLessonFreeDay: async (eventDay) => {
            const { typeOf, id } = eventDay
            let deleteDay = await removeDateFromNoLessons(id)
            if (deleteDay !== id) {
                console.error('wrong type passed in params');
            }

            // remove the event from the store
            const currentStoreState = get(lessonFreeDays)
            const newStore = { [typeOf]: currentStoreState[typeOf].filter(x => x.id !== id) }

            console.log({ ...currentStoreState, ...newStore })
            update((storeState) => { return { ...storeState, ...newStore } })



        }

    }


}



export let noLessonDays = customStore()
