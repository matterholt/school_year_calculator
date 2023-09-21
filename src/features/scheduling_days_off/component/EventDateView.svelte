<script>
    import { Button } from '../component'
    import { noLessonDays } from '../../../store/noLessonDays.js'

    export let scheduleEvent = []

    function deleteTask(index) {
        // scheduleEvent = scheduleEvent.filter((_, i) => i !== index)
        noLessonDays.removeLessonFreeDay(index)
    }
</script>

<ul>
    {#each scheduleEvent as task, index}
        <li>
            <p>
                {task.text}---> <br />{task.StartDate}
                {task.EndDate ? `to ${task.EndDate}` : ''}
            </p>
            <p>Day Count: {task.dayCount}</p>
            <Button class="actionButton" buttonAction={() => deleteTask(task)}
                >Delete</Button
            >
        </li>
    {/each}
</ul>

<style>
    li {
        display: flex;
        justify-content: space-between;
    }
</style>
