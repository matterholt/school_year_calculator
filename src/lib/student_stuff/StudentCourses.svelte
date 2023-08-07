<script>
    import StudentSection from './StudentSection.svelte'
    import { v4 as uuidv4 } from 'uuid'
    // save to storage
    export let students = [
        { name: 'sarah', student_id: 11, subjectStatus: 'save' },
        { name: 'sam', student_id: 12, subjectStatus: 'save' },
    ]
    export let classesAdded = [
        {
            student_id: 11,
            subject_id: 110,
            subject_matter: 'math',
            number_of_chapters: 204,
            current_chapter: 0,
            status: 'saved',
        },
        {
            student_id: 11,
            subject_id: 111,
            subject_matter: 'reading',
            number_of_chapters: 150,
            current_chapter: 0,
            status: 'saved',
        },
        {
            student_id: 12,
            subject_id: 120,
            subject_matter: 'math',
            number_of_chapters: 300,
            current_chapter: 0,
            status: 'saved',
        },
        {
            student_id: 12,
            subject_id: 121,
            subject_matter: 'writing',
            number_of_chapters: 200,
            current_chapter: 0,
            status: 'edit',
        },
    ]
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
    }
</style>
