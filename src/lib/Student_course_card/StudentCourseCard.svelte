<script>
    import CardHeader from './CardHeader.svelte'
    import CardCourseInputs from './CardCourseInputs.svelte'
    import CardCourseList from './CardCourseList.svelte'
    import { enrolledStudents } from '../../store/enrolledStudents.js'

    export let showModal

    let studentName

    let courseWork = []

    function addToStudentCourses(newCourse) {
        const { student_id, subject_id, status } = courseWork[0]
        const NewCouseItem = {
            ...newCourse,
            student_id,
            subject_id: courseWork.length + 1,
            status,
        }
        console.log(newCourse)
        courseWork = [...courseWork, NewCouseItem]
    }

    function enrollNewStudent() {
        const studentStuct = {
            name: studentName,
            grade_level: 1234,
        }

        enrolledStudents.newEnrollment(studentStuct)
        showModal = 'outSideClosed'
    }
</script>

<div class="studentCourseCard">
    <CardHeader bind:studentName />
    <CardCourseList {courseWork} />
    <CardCourseInputs {addToStudentCourses} />
    <button on:click={enrollNewStudent}> Add em </button>
</div>

<style>
    .studentCourseCard {
        width: 100%;
    }
</style>
