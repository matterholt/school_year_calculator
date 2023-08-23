import { writable } from 'svelte/store';
import { students_sample } from '../helpers/sample_data/student_sample.json'
import { v4 as uuidv4 } from 'uuid'


// TODO:::: create custom store
// UPDATE, ADD, DELETE, and others
function studentsStore() {
    const { subscribe, set, update } = writable(students_sample)

    return {
        subscribe,
        removeById: () => console.log('update by removing student'),
        newEnrollment: (newStudent) => update((storeState) => [...storeState, { ...newStudent, student_id: uuidv4(), status: "enrolled" }]),
    }

}

export const enrolledStudents = studentsStore();
