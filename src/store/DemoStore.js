import { writable } from 'svelte/store';
import moment from 'moment'

const currentDate = moment("09-05-2023").format('MM-DD-YYYY')

export const count = writable(currentDate);
