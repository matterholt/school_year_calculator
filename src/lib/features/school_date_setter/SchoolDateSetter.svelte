<script>
    import { Input, Box } from '../../global_components'

    import {
        formatDate,
        dayRangeCal,
        addemWeeksUp,
    } from '../../../helpers/date_manipulations'
    export let totalDayOfSchool = 0

    let startDate = formatDate('2023-09-05')
    let endingDate = addemWeeksUp(startDate, 36) // !!  only if not set in memory...!!!!
    $: {
        totalDayOfSchool = dayRangeCal(startDate, endingDate)
    }
</script>

<Box class="schedule_row-date">
    <Box class="schedule_inputs">
        <Box tag="label" htmlFor="start_date">Start Date :</Box>
        <Input
            id="start_date"
            name="start_date"
            type="date"
            bind:value={startDate}
        />
    </Box>
    <Box class="schedule_inputs">
        <Box tag="label" htmlFor="end_date">End Date :</Box>
        <Input
            id="end_date"
            name="start_date"
            type="date"
            bind:value={endingDate}
        />
    </Box>
</Box>

<style>
    :global(.schedule_row-date) {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    :global(.schedule_inputs) {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>
