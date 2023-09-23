<script>
    import { Input } from '../../global_components'
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
        <h3>Estimated school year</h3>
        <div class="schedule_row-date">
            {startDate}
            <div>
                <p>
                    Start :
                    <Input type="date" bind:value={startDate} />
                </p>
                <p>
                    End : <Input type="date" bind:value={enddingDate} />
                </p>
            </div>
            <p>
                day per week :
                <Input type="number" bind:value={daysPerWeek} min="1" max="7" />
            </p>
        </div>
        <TotalDaysOff />
        <div>Time Off scheduled: 9999 Max amount of lessons: 123</div>
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
