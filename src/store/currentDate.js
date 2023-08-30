import { writable } from 'svelte/store';
import { formatDate } from "../helpers/date_manipulations"

const currentDate = formatDate()
export const dateOnRefreshed = writable(currentDate);
