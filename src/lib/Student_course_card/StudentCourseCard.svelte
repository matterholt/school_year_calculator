<script>
    import CardHeader from './CardHeader.svelte'
    import CardCourseInputs from './CardCourseInputs.svelte'
    import CardCourseList from './CardCourseList.svelte'

    let courseWork = [
        {
            student_id: 11,
            subject_id: 110,
            subject_matter: 'math',
            number_of_lessons: 120,
            lesson_per_wk: 4,
            current_chapter: 0,
            status: 'saved',
        },
    ]

    function addToStudentCourses(newCourse) {
        const { lesson_per_wk, subject_matter, number_of_lessons } = newCourse
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
    <CardHeader studentName={`Student ${1}`} />
    <CardCourseList {courseWork} />
    <CardCourseInputs {addToStudentCourses} />
</div>

<style>
    .studentCourseCard {
        width: 100%;
    }
</style>
