<!-- Form.svelte -->
<script>
    import { onMount } from 'svelte'
    import { holidays } from '../../helpers/us_national_holiday.json'
    import NationalHoliday from './NationalHoliday.svelte'
    import DaysOff from './DaysOff.svelte'

    let startDate = ''
    let sessionsPerWeek = 5
    let endDate = ''

    let selectedNationalHoliday = []
    let plannedHolidays = [{ text: 'dayone', date: '01-01-01' }]
    let unplannedHolidays = [{ text: 'not planned', date: '02-02-02' }]

    $: NumberOfDaysWithNoScooling = [
        ...selectedNationalHoliday,
        ...plannedHolidays,
        ...unplannedHolidays,
    ].length

    function handleSubmit(event) {
        event.preventDefault()

        // Here, you can process the form data as needed
        // For example, you can send it to the server or perform any calculations
        console.log({
            startDate,
            sessionsPerWeek,
            endDate,
            selectedNationalHoliday,
            plannedHolidays,
            unplannedHolidays,
        })
    }
</script>

<form on:submit={handleSubmit}>
    <section>
        <label for="startDate">Start Date:</label>
        <input type="date" id="startDate" bind:value={startDate} />

        <label for="sessionsPerWeek">Number of Sessions per Week:</label>
        <input
            type="number"
            id="sessionsPerWeek"
            bind:value={sessionsPerWeek}
            min="1"
        />

        <label for="endDate">End Date:</label>
        <input type="date" id="endDate" bind:value={endDate} />
    </section>

    <section>
        <NationalHoliday
            {holidays}
            bind:selectedDays={selectedNationalHoliday}
        />
    </section>

    <section>
        <label for="plannedHolidays">Planned Holidays / Vacations:</label>
        <DaysOff bind:scheduledDays={plannedHolidays} />
    </section>

    <section>
        <label for="unplannedHolidays">Unplanned Days:</label>
        <DaysOff bind:scheduledDays={unplannedHolidays} />
    </section>

    <button type="submit">Submit</button>
</form>

<style>
    /* Add your custom styles here */
    form {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin: 0 auto;
    }

    label {
        font-weight: bold;
        margin-top: 10px;
    }

    input,
    textarea {
        margin-bottom: 10px;
        padding: 5px;
    }

    button {
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
    }
    section {
        display: flex;
        flex-direction: column;
        outline: solid;
        padding: 5px;
        border-radius: 5px;
        margin-top: 20px;
    }
</style>
