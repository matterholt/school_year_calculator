<script>
    import { nationalHoliday } from '../../../../store/nationalHoliday'
    import { numberOfDays } from '../../../../helpers/date_manipulations'
    import { Box, Button, Input } from '../../../global_components/'
    import Holiday from './components/Holiday.svelte'

    let holiday = {
        id: 9,
        name: 'Thanksgiving Day',
        date: 'Fourth Thursday in November',
        month: 'November',
        dayCount: 2,
        isObserved: true,
    }

    let activeHolidaySelection = true

    let numberOfHolidays = 0
    let numberDayInHoliday = 0
</script>

<section class="national_holiday">
    <Box class="nationalHoliday_header">
        <Box tag="h3">US Holidays</Box>
        <Box tag="p">
            Holidays: {numberOfHolidays}
        </Box>
        <Box tag="p">
            Days Taken: {numberDayInHoliday}
        </Box>
        <Button
            variant="ghost"
            buttonAction={() =>
                (activeHolidaySelection = !activeHolidaySelection)}
        >
            {activeHolidaySelection ? 'show' : 'noshow'}</Button
        >
    </Box>

    {#if activeHolidaySelection}
        <Holiday {holiday} />
    {/if}
</section>

<style>
    section {
        font-size: 1rem;
        display: flex;
        flex-direction: column;
    }
    :global(.nationalHoliday_header) {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid var(--main-accent-color);
    }
</style>
