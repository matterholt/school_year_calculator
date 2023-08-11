<script>
    export let number_of_chapters
    export let subject_matter
    export let leson_per_wk
</script>

<div class="student_courses">
    <div class="student_course_summary">
        <p>Subject</p>
        <p>Lessons</p>
        <p>consitancy</p>
    </div>
    <div class="student_course_summary">
        <p>{subject_matter}</p>
        <p>{number_of_chapters}</p>
        <p>{leson_per_wk}</p>
    </div>
</div>

<style>
    .student_course_summary {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: start;
    }
    .student_courses {
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        margin: 0px 10px;
    }

</style>
