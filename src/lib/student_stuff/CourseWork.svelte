<script>
    export let studentCourseWork = []
    export let pupilStatus

    // supply a function that can add the new cousrse work object to masters

    let subjectMatter = ''
    let totalLessons = ''

    let notifiy = ''

    function addToStudentCourses() {
        notifiy = ''
        if (!subjectMatter || !totalLessons) {
            return
        }
        studentCourseWork = [
            ...studentCourseWork,
            { subject_matter: subjectMatter, number_of_chapters: totalLessons },
        ]
        subjectMatter = ''
        totalLessons = ''
    }
</script>

<div class="student_classlist">
    {#if studentCourseWork.length !== 0}
        {#each studentCourseWork as studentclass, index}
            <div class="student_courses">
                {#if pupilStatus === 'edit'}
                    <button
                        class="student_activateEdit"
                        on:click={() => console.log('edit mode')}>:::</button
                    >
                {/if}

                <p>subject: {studentclass.subject_matter}</p>
                <p>Total Lessons:{studentclass.number_of_chapters}</p>
            </div>
        {/each}
    {:else}
        <p>no lessons planned</p>
    {/if}
    {#if pupilStatus === 'edit'}
        <div>
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
            <button on:click={() => addToStudentCourses()}>ADD</button>
        </div>
    {/if}
</div>

<style>
    .student_classlist {
        display: flex;
        flex-direction: column;
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
</style>
