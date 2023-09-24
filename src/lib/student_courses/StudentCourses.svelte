<script>
    import { onDestroy } from 'svelte'
    import StudentSection from './StudentSection.svelte'
    import { v4 as uuidv4 } from 'uuid'
    import { coursework_sample } from '../../helpers/sample_data/courseWork_sample.json'
    import { enrolledStudents } from '../../store/enrolledStudents.js'

    import StudentCourseCard from '../../lib/Student_course_card/StudentCourseCard.svelte'

    import { Modal } from '../global_components'
    let showModal = 'closed'

    let students

    const unsubscribe = enrolledStudents.subscribe((value) => {
        students = value
    })

    onDestroy(unsubscribe)

    export let classesAdded = [...coursework_sample]
    // save above to storage

    let addAStudentStatus = ''

    let studentName = `Student ${students.length + 1}`

    function pupilsClasses(id) {
        return classesAdded.filter((x) => x.student_id === id)
    }
    function addToPupilsClasses(coursework) {
        classesAdded = [...classesAdded, coursework]
    }

    function updateSubjectStatus(id, subjectStatus) {
        students = students.map((student) => {
            if (student.student_id === id) {
                return { ...student, subjectStatus }
            }
            return student
        })
    }

    function addTask() {
        if (studentName.trim() !== '') {
            students = [
                ...students,
                {
                    name: studentName,
                    student_id: uuidv4(),
                    subjectStatus: 'edit',
                },
            ]
            studentName = `Student ${students.length + 1}`
        }
    }

    function deleteById(id) {
        students = students.filter((student) => student.student_id != id)
    }
</script>

<ul>
    <div class="actions">
        <button on:click={() => (showModal = 'open')}> Add Student </button>
        <Modal bind:showModal>
            <StudentCourseCard bind:showModal />
        </Modal>
    </div>
    {#each students as pupil, index}
        <StudentSection
            {pupil}
            studentCourseWork={pupilsClasses(pupil.student_id)}
        />
    {/each}
</ul>

<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0px 10px;
    }
</style>
