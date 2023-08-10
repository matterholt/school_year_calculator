<script>
    export let number_of_chapters
    export let subject_matter
    export let lessonPerWeek
</script>

<div class="student_courses">
    <div class="student_course_summary">
        <p>{subject_matter}</p>
        <p>{number_of_chapters}</p>
        <p>{lessonPerWeek}</p>
    </div>

    <button
        class="student_activateEdit"
        on:click={() => console.log('edit mode')}>:::</button
    >
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
        justify-content: space-between;
        margin: 0px 10px;
    }
</style>
