<script>
    export let daysPerWeek = 4
    export let addToStudentCourses
    let subjectMatter = 'General'
    let totalLessons = 120

    let inputsActive = false
</script>

<div class="course_inputs">
    {#if inputsActive}
        <div class="course_input_container">
            <input
                type="text"
                placeholder="subject matter"
                id="subjectMatter"
                bind:value={subjectMatter}
            />
            <input
                type="number"
                placeholder="Total lessons"
                id="totalLessons"
                bind:value={totalLessons}
                min="1"
            />
            <select id="lesson_per_week">
                <option value="">-lessons per week-</option>
                {#each Array.from(Array(daysPerWeek).keys()) as day}
                    <option value={day}>{day} day per week</option>
                {/each}
            </select>
            <button
                class="courses_inputs_add"
                on:click={() => (inputsActive = !inputsActive)}>Add it</button
            >
        </div>
    {:else}
        <div class="course_input_container">
            <button
                class="courses_inputs_add"
                on:click={() => (inputsActive = !inputsActive)}
                >New Course</button
            >
        </div>
    {/if}
</div>

<style>
    input[type='number'],
    select {
        width: 100px;
        height: min-content;
    }
    .course_inputs {
        margin: 10px 0px;
    }
    .course_input_container {
        display: flex;
    }
    .courses_inputs_add {
        width: 100%;
        margin: 20px;
    }
</style>
