<!-- TodoApp.svelte -->
<script>
    import {
        dayRangeCal,
        addSomeDays,
        formatDate,
    } from '../../../helpers/date_manipulations/'
    import { Button } from '../component'

    export let handleUpdateStore
    export let sectionType = ''

    let eventTitle = ''
    let vakStart = formatDate()
    $: vakEnd = isMultiple ? addSomeDays(vakStart, 1) : ''
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
                typeOf: sectionType,
            }

            handleUpdateStore(newDayOff)
            eventTitle = ''
            vakStart = ''
            vakEnd = ''
            isMultiple = false
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
        <Button
            class="actionButton"
            buttonAction={() => (isMultiple = !isMultiple)}
            >{isMultiple ? 'One Day' : 'End Date'}</Button
        >

        {#if vakStart}
            <p>number of days <span>{numberOfSchoolDays}</span></p>
        {/if}
    </div>
    <Button class="actionButton" buttonAction={addNoLessonDay}>Add</Button>
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
    :global(.actionButton) {
        grid-area: actionButton;
    }
</style>
