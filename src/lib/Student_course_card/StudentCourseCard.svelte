<script>
    import CardHeader from './CardHeader.svelte'
    import CardCourseInputs from './CardCourseInputs.svelte'
    import CardCourseList from './CardCourseList.svelte'
    import { enrolledStudents } from '../../store/enrolledStudents.js'

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
</script>

<div class="studentCourseCard">
    <CardHeader />
    <CardCourseList {courseWork} />
    <CardCourseInputs {addToStudentCourses} />
    <button>Add em</button>
</div>

<style>
    .studentCourseCard {
        width: 100%;
    }
</style>
