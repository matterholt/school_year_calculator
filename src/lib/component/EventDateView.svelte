<script>
    export let scheduleEvent = []
    import { noLessonDays } from '../../store/noLessonDays.js'

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
            <button on:click={() => deleteTask(task)}>Delete</button>
        </li>
    {/each}
</ul>

<style>
    li {
        display: flex;
        justify-content: space-between;
    }
</style>
