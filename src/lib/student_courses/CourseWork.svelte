<script>
    export let studentCourseWork = []
</script>

<div class="student_classlist">
    {#if studentCourseWork.length !== 0}
        <div class="student_course_summary">
            <p class="course_item-bold">subject</p>
            <p class="course_item-bold">Total Lessons</p>
        </div>

        {#each studentCourseWork as studentLessons, index}
            <div class="student_courses">
                <div class="student_course_summary">
                    <p>{studentLessons.subject_matter}</p>
                    <p>{studentLessons.number_of_lessons}</p>
                </div>
            </div>
        {/each}
    {:else}
        <p>no lessons planned</p>
    {/if}
</div>

<style>
    .student_classlist {
        display: flex;
        flex-direction: column;
        width: 500px;
    }
    .student_courses {
        display: flex;
        justify-content: space-between;
        margin: 0px 10px;
    }
    .student_activateEdit {
        margin: 0;
        padding: 2px;
        width: 20px;
        font-size: 10px;
        font-weight: 900;
        letter-spacing: 0.1px;
    }
    .student_course_summary {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: start;
    }
    .course_item-bold {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 15px;
    }
</style>
