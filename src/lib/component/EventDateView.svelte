<script>
    export let scheduleEvent = []

    function deleteTask(index) {
        scheduleEvent = scheduleEvent.filter((_, i) => i !== index)
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
            <button on:click={() => deleteTask(index)}>Delete</button>
        </li>
    {/each}
</ul>

<style>
    li {
        display: flex;
        justify-content: space-between;
    }
</style>
