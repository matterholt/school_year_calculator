import { writable } from "svelte/store";

const storedWeekPerDay = localStorage.getItem("numOfDays");
export const schooldaysperweek = writable(storedWeekPerDay)

schooldaysperweek.subscribe(value => {

    console.log(value)
    localStorage.setItem("numOfDays", value);

})