<script>
    import { TotalDaysOff } from './component'

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
            <div>
                <p>Start : <input type="date" bind:value={startDate} /></p>
                <p>End : <input type="date" bind:value={startDate} /></p>
            </div>
            <p>
                day per week : <input
                    type="number"
                    bind:value={daysPerWeek}
                    on:change={() => schooldaysperweek.set(daysPerWeek)}
                    min="1"
                    max="7"
                />
            </p>
        </div>
        <TotalDaysOff />
        <div>Time Off scheduled: 9999 Max amount of lessons: 123</div>
    </section>

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
</div>

<style>
</style>
