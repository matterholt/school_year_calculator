<script>
    export let scheduleEvent = []

    function deleteTask(index) {
        scheduleEvent = scheduleEvent.filter((_, i) => i !== index)
    }
</script>

<ul>
    {#each scheduleEvent as task, index}
        <li>
            <span>
                {task.text}---> {task.StartDate}
                {task.EndDate ? `to ${task.EndDate}` : ''}</span
            >
            <p>Day Count: {task.dayCount}</p>
            <button on:click={() => deleteTask(index)}>Delete</button>
        </li>
    {/each}
</ul>
