<script>
    import { v4 as uuidv4 } from 'uuid'

    export let studentCourseWork = []
    export let pupilStatus
    export let pupilId
    export let addToPupilsClasses

    // supply a function that can add the new cousrse work object to masters

    let subjectMatter = ''
    let totalLessons = ''

    function addToStudentCourses() {
        if (!subjectMatter || !totalLessons) {
            return
        }

        studentCourseWork = [
            ...studentCourseWork,
            {
                subject_matter: subjectMatter,
                number_of_chapters: totalLessons,
                subject_id: uuidv4(),
                courseStatus: 'edit',
                student_id: pupilId,
                current_chapter: 0,
            },
        ]
        addToPupilsClasses({
            subject_matter: subjectMatter,
            number_of_chapters: totalLessons,
            subject_id: uuidv4(),
            courseStatus: 'edit',
            student_id: pupilId,
            current_chapter: 0,
        })
        subjectMatter = ''
        totalLessons = ''
    }
</script>

<div class="student_classlist">
    {#if studentCourseWork.length !== 0}
        <div class="student_course_summary">
            <p class="course_item-bold">subject</p>
            <p class="course_item-bold">Total Lessons</p>
        </div>

        {#each studentCourseWork as studentclass, index}
            <div class="student_courses">
                <div class="student_course_summary">
                    <p>{studentclass.subject_matter}</p>
                    <p>{studentclass.number_of_chapters}</p>
                </div>
                {#if pupilStatus === 'edit'}
                    <button
                        class="student_activateEdit"
                        on:click={() => console.log('edit mode')}>:::</button
                    >
                {/if}
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
