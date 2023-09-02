<script>
    import { schooldaysperweek } from '../../store/schoolyear'
    import SchoolDateSetting from '../component/school_date_settings/SchoolDateSetting.svelte'

    import { formatDate } from '../../helpers/date_manipulations/'

    export let daysScheduledOff = 30 // collect all stores, and get the day count

    let startDate = formatDate('2023-09-05')

    $: daysPerWeek = $schooldaysperweek
</script>

<section class="schedule_column">
    <h3>estimated school year</h3>
    <div class="schedule_row-date">
        <p>Start : <input type="date" bind:value={startDate} /></p>
        <SchoolDateSetting />
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
        border-bottom: solid 2px rgb(92, 92, 92);
    }
</style>
