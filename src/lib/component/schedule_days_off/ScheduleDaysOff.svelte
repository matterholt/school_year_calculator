<!-- Form.svelte -->
<script>
    import { onMount } from 'svelte'
    import DaysOff from '../EventDateInput.svelte'
    export let daysScheduledOff = 0

    let startDate = ''
    let sessionsPerWeek = 5
    let endDate = ''

    let selectedNationalHoliday = []
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
            unplannedHolidays,
        })
    }
</script>

<form on:submit={handleSubmit}>
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
