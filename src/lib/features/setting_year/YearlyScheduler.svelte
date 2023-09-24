<script>
    import { Input, Box } from '../../global_components'
    import TotalDaysOff from './component/total_days_off/TotalDaysOff.svelte'

    import { schooldaysperweek } from '../../../store/schoolyear'

    import { formatDate } from '../../../helpers/date_manipulations'

    let startDate = formatDate('2023-09-05')

    // TODO:
    /**
     * grab all the days off,
     * national,planned, unplanned
     *
     * then take the days whis to
     */
    let enddingDate = formatDate('2023-09-05')

    $: daysPerWeek = $schooldaysperweek
</script>

<div>
    <section class="schedule_column">
        <Box tag="h3">Estimated school year</Box>
        <div class="schedule_row-date">
            <div>
                <Box tag="span">THIS SHOULD BE SPAN</Box>
                <Box>
                    Start :
                    <Input type="date" bind:value={startDate} />
                </Box>
                <Box>
                    End : <Input type="date" bind:value={enddingDate} />
                </Box>
            </div>
            <Box>
                day per week :
                <Input type="number" bind:value={daysPerWeek} min="1" max="7" />
            </Box>
        </div>
        <TotalDaysOff />
        <Box>Time Off scheduled: 9999 Max amount of lessons: 123</Box>
    </section>
</div>

<style>
    .schedule_column {
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        height: min-content;
    }

    .schedule_row-date {
        display: flex;
        justify-content: space-evenly;
    }
</style>
