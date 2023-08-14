import { writable } from 'svelte/store';
import { students_sample } from '../helpers/sample_data/student_sample.json'

// TODO:::: create custom store
// UPDATE, ADD, DELETE, and others

const students = writable(students_sample)



export const enrolledStudents = students;
