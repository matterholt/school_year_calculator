
import { writable, get } from 'svelte/store';
import { updateStore } from "../local_storage/saveIndexedDb"
import { holidays } from '../helpers/us_national_holiday.json'



const Initial = holidays


function customStore() {

    const schoolYearHolidays = writable(Initial)
    const { subscribe, set, update } = schoolYearHolidays


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
        }

    }


}



export let nationalHoliday = customStore()
