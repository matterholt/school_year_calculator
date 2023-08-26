import Dexie from "dexie";

const database_name = 'courser_app'

const national_holiday_table = { national_holidays: '++id, name, date, dayValue, isObserved' }
const scheduled_days_off_table = { scheduled_days_off: '++id, text, start_date, end_date type_of, day_count' }
const unPlanned_days_off_table = { unPlanned_days_off: '++id, text, start_date, end_date type_of, day_count' }


const db = new Dexie(database_name);

db.version(1).stores({
    ...national_holiday_table,
})

async function addBaseHoliday(initialState) {
    let indexedIsZero = await db.national_holidays.count(count => count === 0);
    console.log(initialState)
    if (indexedIsZero) {
        db.national_holidays.bulkAdd(initialState)
    }
    return

}


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

export { updateStore, addBaseHoliday }
