
import { writable, get } from 'svelte/store';
import { updateStore, addBaseHoliday, resetStore } from "../local_storage/saveIndexedDb"
import { holidays } from '../helpers/us_national_holiday.json'assert { type: "json" };



const Initial = holidays


function customStore() {

    const schoolYearHolidays = writable(Initial)
    const { subscribe, set, update } = schoolYearHolidays

    addBaseHoliday(Initial).then(
        (data) => {
            schoolYearHolidays.set(data)
        }
    )

    return {
        subscribe,
        updateNationalHoliday: (updateList) => {
            updateStore('national_holidays', updateList)
            update((currentState) => {
                const nationalHolidayRemoveSelect = currentState.filter(
                    (x) => x.id !== updateList.id
                )
                return [...nationalHolidayRemoveSelect, updateList]
            })
        },
        resetToInitial: () => {
            resetStore('national_holidays')
            schoolYearHolidays.set(Initial)
        }


    }


}



export let nationalHoliday = customStore()
