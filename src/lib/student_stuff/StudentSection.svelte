<script>
    import CourseWork from './CourseWork.svelte'

    export let pupil = {}
    export let studentCourseWork = []
    export let updateSubjectStatus

    $: pupilStatus = 'edit'

    function updateStatus(action) {
        pupilStatus = action
    }
</script>

<li>
    <div class="student_header">
        <p class="sudentName">
            {pupil.name}
        </p>

        {#if pupil.subjectStatus == 'edit'}
            <div>
                <button class="remove_X" on:click={() => deleteTask(index)}
                    >Delete</button
                >
                <button
                    class="remove_X"
                    on:click={() =>
                        updateSubjectStatus(pupil.student_id, 'save')}
                    >Save</button
                >
            </div>
        {/if}
        {#if pupil.subjectStatus == 'save'}
            <div>
                <button
                    class="remove_X"
                    on:click={() =>
                        updateSubjectStatus(pupil.student_id, 'edit')}
                    >Edit</button
                >
            </div>
        {/if}
    </div>

    <CourseWork {studentCourseWork} pupilStatus={pupil.subjectStatus} />
</li>

<style>
    button {
        padding: 5px 10px;
        margin-left: 10px;
    }

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 20px 0px;
    }
    p {
        margin: 5px;
    }
    .sudentName {
        font-weight: 900;
        text-transform: uppercase;
    }
    .remove_X {
        color: red;
        border: solid 2px red;
    }
    .student_header {
        display: flex;
        justify-content: space-between;
        background: red;
        width: 100%;
    }
</style>
