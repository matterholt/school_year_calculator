<script>
    import CourseWork from './CourseWork.svelte'

    export let pupil = {}
    export let studentCourseWork = []
    export let updateSubjectStatus
    export let addToPupilsClasses
    export let deleteById
</script>

<li>
    <div class="student_header">
        <p class="sudentName">
            {pupil.name}
        </p>

        {#if pupil.subjectStatus == 'edit'}
            <div>
                <button
                    class="remove_X"
                    on:click={() => deleteById(pupil.student_id)}>Delete</button
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

    <CourseWork
        pupilId={pupil.student_id}
        {studentCourseWork}
        {addToPupilsClasses}
        pupilStatus={pupil.subjectStatus}
    />
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
        color: rgb(0, 132, 255);
        border: solid 2px rgb(0, 132, 255);
    }
    .student_header {
        display: flex;
        justify-content: space-between;
        background: rgb(0, 132, 255);
        border-radius: 10px;
        width: 100%;
    }
</style>
