<!-- TodoApp.svelte -->
<script>
    export let scheduledDays

    let newTask = ''
    let vakStart = ''
    let vakEnd = ''

    let isMultiple = false

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
</script>

<div class="event_date_inputs">
    <input
        class="dateTitle"
        type="text"
        bind:value={newTask}
        placeholder="Vacation"
    />
    <div class="dateSetters">
        <input type="date" id="vakStart" bind:value={vakStart} />
        {#if isMultiple}
            <input type="date" id="vakStart" bind:value={vakEnd} />
        {/if}
        <button on:click={() => (isMultiple = !isMultiple)}>
            {isMultiple ? 'One Day' : 'Multiple Days'}</button
        >
    </div>
    <button class="actionButton" on:click={addTask}>Add</button>
</div>

<style>
    /* Add your custom styles here */
    .event_date_inputs {
        background-color: #212121;
        padding: 10px;
        border-radius: 5px;
        display: grid;
        gap: 10px;
        grid-template-columns: 1fr 75px;
        grid-template-areas:
            ' dateTitle dateTitle'
            ' dateSetters actionButton';
    }

    input[type='text'] {
        flex: 1;
        padding: 5px;
    }
    .dateTitle {
        grid-area: dateTitle;
    }
    .dateSetters {
        grid-area: dateSetters;
    }
    .actionButton {
        grid-area: actionButton;
    }
    button {
        padding: 5px 10px;
        margin-left: 10px;
    }
</style>
