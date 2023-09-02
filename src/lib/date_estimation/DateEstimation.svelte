<script>
    import { schooldaysperweek } from '../../store/schoolyear'

    import {
        dayBetweenDates,
        addemWeeksUp,
        numberOfDays,
        formatDate,
    } from '../../helpers/date_manipulations/'

    export let daysScheduledOff = 30 // collect all stores, and get the day count

    let startDate = formatDate('2023-09-05')

    $: daysPerWeek = $schooldaysperweek
    let longestLesson = 120

    $: weeksNeedForCourse = longestLesson / daysPerWeek
    $: daysNeedForCourse = longestLesson

    $: weekScheduledOff = daysScheduledOff / 5

    $: estimatedWeeks = weeksNeedForCourse + weekScheduledOff

    $: courseBaseEndDate = addemWeeksUp(startDate, estimatedWeeks)
</script>

<div class="schedule_row">
    <p />
    <p>weeks/Days</p>
    <p>End Date</p>
</div>
<div class="schedule_row">
    <p>Course Based @ {daysPerWeek} days</p>
    <p>{weeksNeedForCourse} / {daysNeedForCourse}</p>
    <p>{courseBaseEndDate}</p>
</div>

<style>
    .schedule_row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>
