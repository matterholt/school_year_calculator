<script>
    export let addToStudentCourses

    let lesson_per_wk
    let subject_matter
    let number_of_lessons

    let inputsActive = true

    $: addIsDisable = [lesson_per_wk, subject_matter, number_of_lessons].some(
        (x) => !x
    )

    function handleButtonClick() {
        if ([lesson_per_wk, subject_matter, number_of_lessons]) {
        }
        let course = {
            lesson_per_wk,
            subject_matter,
            number_of_lessons,
        }
        lesson_per_wk = ''
        subject_matter = ''
        number_of_lessons = ''
        addToStudentCourses(course)
        // inputsActive = !inputsActive
    }
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
                bind:value={number_of_lessons}
                min="1"
            />
            <button
                class="courses_inputs_button"
                on:click={handleButtonClick}
                disabled={addIsDisable}>➕</button
            >
        </div>
    {:else}
        <div class="course_input_container">
            <button class="courses_inputs_add">New Course</button>
        </div>
    {/if}
</div>

<style>
    input[type='number'] {
        width: 55px;
    }
    input[type='text'] {
        width: 200px;
    }
    input,
    select {
        width: 100px;
        height: min-content;
        padding: 5px;
        font-size: 15px;
        border: none;
    }
    .course_inputs {
        margin: 10px 0px;
        width: 100%;
    }
    .course_input_container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 20px 0px;
    }
    .courses_inputs_add {
        width: 100%;
    }
    .courses_inputs_button {
        display: grid;
        place-items: center;
        width: 45px;
        padding: 10px 0px;
    }
</style>
