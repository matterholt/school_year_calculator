<script>
    import { Box, Button, Input } from '../../../global_components/'

    import { nationalHoliday } from '../../../../store/nationalHoliday'
    import { numberOfDays } from '../../../../helpers/date_manipulations'

    let activeHolidaySelection = false
</script>

<section class="national_holiday">
    <Box class="nationalHoliday_header">
        <Box tag="h3">US Holidays</Box>
        <Button
            variant="ghost"
            buttonAction={() =>
                (activeHolidaySelection = !activeHolidaySelection)}
        >
            {activeHolidaySelection ? 'show' : 'noshow'}</Button
        >
    </Box>
    <Box>
        <ul>
            <li>Holidays: XX</li>
            <li>Days: XX</li>
        </ul>
    </Box>
    {#if activeHolidaySelection}
        <p>component that will list out the Holidays for the school year</p>
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
