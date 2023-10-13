<script>
    import { nationalHoliday } from '../../../../store/nationalHoliday'
    import { holidays } from '../../../../helpers/us_national_holiday.json'

    import { numberOfDays } from '../../../../helpers/date_manipulations'
    import { Box, Button, Input } from '../../../global_components/'
    import Holiday from './components/Holiday.svelte'

    // holidays during school year at the top,
    $: nationalHolidayList = holidays
    $: {
        console.log(nationalHolidayList)
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
            >{activeHolidaySelection ? 'show' : 'noshow'}</Button
        >
    </Box>

    {#if activeHolidaySelection}
        <div class="holiday_usNational_list">
            {#each holidays as holiday}
                <Holiday {holiday} />
            {/each}
        </div>
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
    .holiday_usNational_list {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 20px;
    }
</style>
