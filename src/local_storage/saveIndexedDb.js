import Dexie from "dexie";

const database_name = 'courser_app'

const national_holiday_table = {}
const scheduled_days_off_table = {}



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
    }
    return

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
/**
 * update the value in the indexedDB for the table national holidays
 * @param {string} db_store 
 * @param {{ name:string, date:string, dayCount:string, isObserved:boolean}} store_data 
 */
async function updateStoreDaysOff(db_store, store_data) {
    db[db_store].add(store_data)
    console.log(store_data)


}




export { updateStore, addBaseHoliday, updateStoreDaysOff }
