<script>
    import StudentSection from './StudentSection.svelte'
    import { v4 as uuidv4 } from 'uuid'
    import { students_sample } from '../../helpers/sample_data/student_sample.json'
    import { coursework_sample } from '../../helpers/sample_data/courseWork_sample.json'

    // save to storage
    export let students = [...students_sample]

    export let classesAdded = [...coursework_sample]
    // save above to storage

    $: console.log(classesAdded)

    let addAStudentStatus = ''

    let studentName = `Student ${students.length + 1}`

    function pupilsClasses(id) {
        return classesAdded.filter((x) => x.student_id === id)
    }
    function addToPupilsClases(coursework) {
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
    {#each students as pupil, index}
        <StudentSection
            {pupil}
            {deleteById}
            {updateSubjectStatus}
            {addToPupilsClases}
            studentCourseWork={pupilsClasses(pupil.student_id)}
        />
    {/each}

    <div>
        {#if addAStudentStatus === 'edit'}
            <input
                type="text"
                bind:value={studentName}
                placeholder={studentName}
            />
            <button on:click={addTask}>Add</button>
            <button on:click={() => (addAStudentStatus = 'done')}>DONE</button>
        {:else}
            <button on:click={() => (addAStudentStatus = 'edit')}>edit</button>
        {/if}
    </div>
</ul>

<style>
    /* Add your custom styles here */

    input[type='text'] {
        flex: 1;
        padding: 5px;
    }

    button {
        padding: 5px 10px;
        margin-left: 10px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0px 10px;
        grid-row: 2;
    }
</style>
