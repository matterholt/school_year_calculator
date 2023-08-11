<script>
    export let daysPerWeek = 4
    export let addToStudentCourses

    export let leson_per_wk
    export let subject_matter 
    export let number_of_chapters 

    let inputsActive = true
</script>

<div class="course_inputs">
    {#if inputsActive}
        <div class="course_input_container">
            <input
                type="text"
                placeholder="subject matter"
                id="subjectMatter"
                bind:value={subject_matter}
            />
            <input
                type="number"
                placeholder="Total lessons"
                id="totalLessons"
                bind:value={number_of_chapters}
                min="1"
            />
            <select id="lesson_per_week">
                <option value="">-lessons per week-</option>
                {#each Array.from(Array(daysPerWeek).keys()) as day}
                    <option value={day}>{day} day per week</option>
                {/each}
            </select>
            <button
                class="courses_inputs_button"
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
    input,
    select {
        width: 100px;
        height: min-content;
        padding:5px;
        font-size: 15px;
        border:none;
    }
    .course_inputs {
        margin: 10px 0px;
        width: 100%;
    }
    .course_input_container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 20px;

    }
    .courses_inputs_add {
        width: 100%;
    }
</style>
