import Dexie from "dexie";

const database_name = 'courser_app'


const db = new Dexie(database_name);

db.version(1).stores({
    national_holidays: '++id, name, date, dayCount, isObserved',
    scheduled_days_off: '++id, text, startDate, endDate, dayCount'
})

/**
 * adding the initial national holidays if there is none save
 * @param {{name:string, date:string, dayCount:string, isObserved:boolean}[]} initialState 
 * @returns 
 */
async function addBaseHoliday(initialState) {
    let indexedIsZero = await db.national_holidays.count(count => count === 0);

    if (indexedIsZero) {
        db.national_holidays.bulkAdd(initialState)
        return await db.national_holidays.toArray()
    }
    return await db.national_holidays.toArray()

}


async function getNoLessonsDays() {
    const scheduledDaysOff = await db.scheduled_days_off.filter(day => day.typeOf === "scheduledDaysOff").toArray()
    const unPlannedDaysOff = await db.scheduled_days_off.filter(day => day.typeOf === "unPlannedDaysOff").toArray()


    return {
        scheduledDaysOff,
        unPlannedDaysOff
    }
}


/**
 * update the value in the indexedDB for the table national holidays
 * @param {string} db_store 
 * @param {{id:string, name:string, date:string, dayCount:string, isObserved:boolean}} store_data 
 */
async function updateStore(db_store, store_data) {
    try {
        const { id } = store_data
        db[db_store].update(id, store_data).then(function (updated) {
            if (!updated) {
                db[db_store].add(store_data)
            }
        });

    } catch (e) {
        console.error(e)
    }
}

async function resetStore(db_store, store_data) {
    console.log(`TODO::: \nreset the data base to original state ${db_store}`)

}

/**
 * update the value in the indexedDB for the table national holidays
 * @param {string} db_store 
 * @param {{ name:string, date:string, dayCount:string, isObserved:boolean}} store_data 
 */
async function updateStoreDaysOff(db_store, store_data) {
    db[db_store].add(store_data)
}

/**
 * Removes entry from the data base
 * Promise that return undefined, no matter what
 * https://dexie.org/docs/Table/Table.delete()
 * 
 * @param {number} eventDayId 
 * @returns 
 */
async function removeDateFromNoLessons(eventDayId) {
    let dayRemove = db['scheduled_days_off'].delete(eventDayId)
    return dayRemove === 'undefined' ? eventDayId : "FAILED"

}





export { removeDateFromNoLessons, updateStore, resetStore, addBaseHoliday, updateStoreDaysOff, getNoLessonsDays }
