<!-- TodoApp.svelte -->
<script>
    // export let scheduledDays
    export let handleUpdateStore
    import { dayRangeCal } from '../../helpers/date_manipulations/'

    let eventTitle = ''
    let vakStart = ''
    let vakEnd = ''
    $: numberOfSchoolDays = dayRangeCal(vakStart, vakEnd)

    let isMultiple = false

    function addNoLessonDay() {
        if (eventTitle.trim() !== '') {
            // TODO calculate date how many days
            let newDayOff = {
                text: eventTitle,
                StartDate: vakStart,
                EndDate: vakEnd,
                dayCount: numberOfSchoolDays,
            }

            handleUpdateStore(newDayOff)
            eventTitle = ''
            vakStart = ''
            vakEnd = ''
        }
    }
</script>

<div class="event_date_inputs">
    <input
        class="dateTitle"
        type="text"
        bind:value={eventTitle}
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
        {#if vakStart}
            <p>number of days <span>{numberOfSchoolDays}</span></p>
        {/if}
    </div>
    <button class="actionButton" on:click={addNoLessonDay}>Add</button>
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
