<script>
    export let courseWork
    export let schoolWeeks = 36

    import InputValue from './InputValue.svelte'
</script>

<div class="student_courses">
    <div class="student_course_summary">
        <p>Subject</p>
        <p>Lessons</p>
        <p>per week at <br />{schoolWeeks} wks</p>
    </div>
    {#each courseWork as { subject_matter, number_of_lessons, lesson_per_wk, subject_id } (subject_id)}
        <div class="student_course_summary">
            <p>{subject_matter}</p>
            <p>{number_of_lessons}</p>
            <p>
                <span style="margin-left:1px">{lesson_per_wk}</span>
            </p>
        </div>
    {/each}
</div>

<style>
    .student_course_summary {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr) 50px;
        justify-items: start;
    }
    .student_courses {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0px 10px;
    }
</style>
