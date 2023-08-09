<!-- TodoApp.svelte -->
<script>
    export let scheduledDays

    let newTask = ''
    let vakStart = ''

    function addTask() {
        if (newTask.trim() !== '') {
            scheduledDays = [
                ...scheduledDays,
                { text: newTask, date: vakStart },
            ]
            newTask = ''
            vakStart = ''
        }
    }

    function deleteTask(index) {
        scheduledDays = scheduledDays.filter((_, i) => i !== index)
    }
</script>

<ul>
    {#each scheduledDays as task, index}
        <li>
            <span> {task.text}---> {task.date}</span>
            <button on:click={() => deleteTask(index)}>Delete</button>
        </li>
    {/each}

    <div>
        <input type="text" bind:value={newTask} placeholder="Vacation" />
        <input type="date" id="vakStart" bind:value={vakStart} />

        <button on:click={addTask}>Add</button>
    </div>
</ul>

<style>
    /* Add your custom styles here */

    div {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    input[type='text'] {
        flex: 1;
        padding: 5px;
    }

    button {
        padding: 5px 10px;
        margin-left: 10px;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }
</style>
